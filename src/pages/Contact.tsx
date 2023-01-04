import React from 'react';

const Contact = () => {
  return (
    <div className='text-gray-700 dark:text-gray-100  max-w-screen-xl mx-auto px-4 lg:px-6 flex flex-col items-center py-10'>
      <div className='flex flex-col'>
        <div className='flex space-x-10'>
          <div className='flex flex-col'>
            <span className='font-bold text-md mb-1'>
              Send a message<span className='text-sky-900'>.</span>
            </span>
            <span className='text-sm text-gray-500'>
              For questions and new projects.
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='max-w-[500px] mb-2 font-semibold text-sm'>
              Good to see you are interested in me or one of my projects! If you
              are looking for a website or app, please email me or say hi at one
              of the social networks listed at the bottom. I'm always good to
              see new collaborations.
            </span>
            <span className='max-w-[500px] text-gray-500 text-sm'>
              All my open source projects have their own GitHub Repository where
              you can create issues if you find a bug. Explain what happened
              when the bug occurred and I’ll see what I can do. You can also suggest your own ideas to this project to make it better.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
