import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };
  return (
    <div className='container flex mx-auto max-w-screen-md items-center justify-center h-screen'>
      <div className='flex flex-col w-3/5 bg-white p-8 rounded-lg border border-black-faded'>
        <h1 className='text-3xl text-center text-blue font-bold font-serif m-4'>
          Bactor Web Portal
        </h1>
        <div className='my-16'>
          <div className='flex flex-col items-center bg-white p-4 border  border-black-faded rounded mb-4'>
            {error && (
              <p className='mb-4 text-xs text-green-lightest'> {error} </p>
            )}
            <form onSubmit={handleLogin}>
              <input
                aria-label='Enter your Email Address'
                type='text'
                placeholder='Email Address'
                className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-black-faded rounded mb-2'
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />

              <input
                aria-label='Enter your Password'
                type='password'
                placeholder=' Password '
                className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-black-faded rounded mb-2'
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
              <button
                disabled={isInvalid}
                type='submit'
                className={`bg-green-darkest text-white w-full rounded h-8 font-bold ${
                  isInvalid ? 'opacity-50' : 'opacity-100'
                } `}
              >
                LogIn
              </button>
            </form>
          </div>
          <div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-black-faded rounded'>
            <p className='text-sm'>
              Don't have an account?{' '}
              <Link to={ROUTES.SIGN_UP} className='font-bold text-blue'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
