import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { SlSocialGithub } from 'react-icons/sl';

type IContact = {
  theme: boolean;
};

const Contact: React.FC<IContact> = ({ theme }) => {
  return (
    <div className={theme ? 'dark' : ''}>
      <div className='text-gray-700 dark:text-gray-100  max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center py-10'>
        <div className='flex space-x-10'>
          <div className='flex flex-col'>
            <span className='flex font-bold text-sm mb-1'>
              Send a message.
            </span>
            <span className='text-xs text-gray-500 mb-3 dark:text-gray-400'>
              For questions and new projects.
            </span>
            <a
              className=' flex items-center rounded py-2 px-4 bg-gray-200 dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:bg-[#1f2937]  transition-all mb-2 text-xs'
              href='https://github.com/chernyshevartemiy'
              target='_blank'
            >
              <SlSocialGithub className='h-4 mr-2' />
              Github
            </a>
            <a
              className='flex items-center rounded py-2 px-4 bg-gray-200 transition-all dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:bg-[#1f2937] dark:hover:text-gray-100 text-xs'
              href='https://discord.com/users/339701172564656128'
              target='_blank'
            >
              <FaDiscord className='h-4 mr-2' />
              Discord
            </a>
          </div>
          <div className='flex flex-col'>
            <span className='max-w-[400px] mb-2 font-semibold text-sm'>
              Good to see you are interested in me or one of my projects! If you
              are looking for a website or app, please say hi at one of the
              social networks listed at the left side. I'm always good to see
              new collaborations.
            </span>
            <span className='max-w-[400px] text-gray-500 text-sm dark:text-gray-400'>
              All my open source projects have their own GitHub Repository where
              you can create issues if you find a bug. Explain what happened
              when the bug occurred and I’ll see what I can do. You can also
              suggest your own ideas to this project to make it better.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
