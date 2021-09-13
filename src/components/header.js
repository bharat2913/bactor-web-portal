import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  const user = {
    username: true,
  };
  return (
    <header className=' h-16 bg-gray-background border-b border-gray-primary '>
      <div className='container mx-auto max-w-screen-md h-full'>
        <div className=' flex justify-between h-full'>
          <div className='text-gray-700 text-center flex items-center align-items cursor-pointer'>
            <h1 className='text-xl text-center text-blue font-bold font-serif m-4'>
              Bactor Web Portal
            </h1>
          </div>
          <div className='text-gray-700 text-center flex items-center align-items'>
            {user.username ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label='Dashboard'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 mr-6 text-black-light cursor-pointer'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                </Link>

                <Link to={ROUTES.DASHBOARD} aria-label='Dashboard'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 mr-6 text-black-light cursor-pointer bi bi-chat-right-dots-fill'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                  >
                    <path d='M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                  </svg>
                </Link>

                <Link
                  to={ROUTES.DASHBOARD}
                  className='text-xs'
                  aria-label='Posted Requirements'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 mr-6 text-black-light cursor-pointer bi bi-chat-right-dots-fill'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                  >
                    <path d='M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                  </svg>
                </Link>

                <button type='button' title='Sign Out'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 mr-6 text-black-light cursor-pointer'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                </button>
                <div className='flex items-center cursor-pointer'>
                  <Link to={`/profile`}>
                    <img
                      className='rounded-full h-10 w-10 flex'
                      src='https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png'
                      alt={`profile`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type='button'
                    className='bg-blue-medium font-bold text-sm rounded-2xl text-blue border w-20 h-8'
                  >
                    Log In
                  </button>
                </Link>

                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type='button'
                    className='font-bold text-sm rounded-2xl bg-black-light text-green-light w-20 h-8 mx-4'
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
