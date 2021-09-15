import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Profile() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='w-1/3 '>
          <div className='flex items-center gap-4 m-4 p-4 bg-white'>
            <div>
              <img
                src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg'
                alt='profile'
              />
            </div>
            <div>
              <p className='text-xs'>Hello,</p>
              <h2 className='text-base font-semibold'>User</h2>
            </div>
          </div>

          <div className='m-4 py-4 bg-white'>
            <div className='flex px-4 mb-4 gap-4 cursor-pointer '>
              <img
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=='
                alt='orders'
              />
              <p>My Orders</p>
            </div>

            <div className='px-4 border-t border-black-faded py-3 mb-4 gap-4 cursor-pointer'>
              <div className='flex gap-4'>
                <img
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4='
                  alt='AccountSetting'
                />
                <p>Account Settings</p>
              </div>
              <p className='pl-10 pt-2 text-sm'>Profile Information</p>
              <p className='pl-10 pt-2 text-sm'>Manage Address</p>
              <p className='pl-10 pt-2 text-sm'>PAN Card Information</p>
            </div>

            <div className='px-4 border-t border-black-faded py-3 mb-4 gap-4 cursor-pointer '>
              <div className='flex gap-4'>
                <img
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+'
                  alt='Payments'
                />
                <p>Payments</p>
              </div>
              <p className='pl-10 pt-2 text-sm'>Gift Cards</p>
              <p className='pl-10 pt-2 text-sm'>Saved UPI</p>
              <p className='pl-10 pt-2 text-sm'>Saved Cards</p>
            </div>
          </div>
        </div>
        <div className='w-2/3 m-4 p-8 bg-white'>
          <div>
            <div className='font-semibold'>
              Personal Information{' '}
              <span className='text-blue font-semibold pl-4'>Edit</span>
            </div>
            <div className='flex gap-4 my-4'>
              <input
                type='text'
                placeholder='First name'
                className='p-2 bg-gray-primary rounded-md'
              />
              <input
                type='text'
                placeholder='Last name'
                className='p-2 bg-gray-primary rounded-md'
              />
            </div>

            <p className='text-sm'>Your Gender</p>
            <div className='flex my2'>
              <label className='px-3 flex items-center gap-2  text-sm'>
                <input type='radio' name='Male' id='male' />
                Male
              </label>
              <label className='px-3 flex items-center gap-2 text-sm'>
                <input type='radio' name='Female' id='female' />
                Female
              </label>
            </div>

            <div className='mt-8'>
              <div className='font-semibold'>
                Email Address{' '}
                <span className='text-blue font-semibold pl-4'>Edit</span>
              </div>
              <div className='flex gap-4 my-4'>
                <input
                  type='text'
                  placeholder='email'
                  className='p-2 bg-gray-primary rounded-md'
                />
              </div>
            </div>

            <div className='mt-8'>
              <div className='font-semibold'>
                Mobile Number{' '}
                <span className='text-blue font-semibold pl-4'>Edit</span>
              </div>
              <div className='flex gap-4 my-4'>
                <input
                  type='number'
                  placeholder='xxxxxxxxxxx'
                  className='p-2 bg-gray-primary rounded-md'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
