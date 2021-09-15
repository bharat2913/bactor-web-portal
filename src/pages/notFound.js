import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import Footer from '../components/footer';

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className='border border-black-faded bg-white text-2xl text-green-darkest font-semibold rounded-md p-16 m-16'>
        URL NOT FOUND
        <p className='text-base'>
          back to{' '}
          <Link className='text-blue text-opacity-80' to={ROUTES.DASHBOARD}>
            {' '}
            home page{' '}
          </Link>{' '}
        </p>
      </div>
      <Footer />
    </div>
  );
}
