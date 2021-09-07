import React, { useState } from 'react';
import Header from '../components/header';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className='container flex mx-auto max-w-screen-md items-center justify-center h-screen'>
        This is dashboard
      </div>
    </div>
  );
}
