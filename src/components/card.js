import React from 'react';

export default function Card({ cardDetails }) {
  console.log(cardDetails);
  return (
    <>
      {cardDetails.map((cardDetail) => (
        <div className='flex gap-4 justify-center items-center border border-black-faded rounded-md p-4 min-h-230 max-w-2/5'>
          <div>
            <img
              className='rounded-md'
              src={cardDetail.thumbnail}
              alt='Product Thumbnail'
            />
          </div>
          <div>
            <h3 className='font-bold text-base mb-3'>{cardDetail.title}</h3>
            <div className='flex flex-col gap-1 text-sm'>
              {cardDetail.data.map((product) => (
                <p>{product}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
