import React from 'react';
import Card from './card';

export default function Slice({ slices }) {
  return (
    <>
      {slices.map((slice) => (
        <div className='flex flex-col mx-8 my-8 bg-gray-primary rounded-md p-4 shadow-lg'>
          <h2 className='text-2xl font-bold'>{slice.title}</h2>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <img
                className='my-4 rounded-lg h-full object-cover'
                src={slice.banner}
                alt='Category Banner'
              />
            </div>
            <div className='col-span-2 flex flex-wrap ml-8 my-4 items-center gap-4 '>
              <Card cardDetails={slice.cardDetails} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
