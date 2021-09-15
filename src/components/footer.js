import React from 'react';

export default function Footer() {
  return (
    <div className='bg-gray-background border-b border-gray-primary pt-4 '>
      <div className='container mx-auto max-w-screen-md h-full'>
        <div className=' flex justify-between h-full text-gray-base '>
          <div>
            <p>About Us</p>
            <p>Join Sales</p>
            <p>Success Stories</p>
            <p>Press Selection</p>
            <p>Advertise with Us</p>
            <p>Investor Section</p>
          </div>
          <div>
            <p>Help</p>
            <p>Feedback</p>
            <p>Complaints</p>
            <p>Customer Care</p>
            <p>Jobs & Careers</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className='font-semibold text-black-light'>Suppliers Tool Kit</p>
            <p>Latest BuyLead</p>
            <p>Learning Center</p>
          </div>
          <div>
            <p className='font-semibold text-black-light'>Buyers Tool Kit</p>
            <p>Post Your Requirement</p>
            <p>Produt You Buy</p>
            <p>Press</p>
            <p>Search Products & Suppliers</p>
          </div>
          <div>
            <p className='font-semibold text-black-light'>EVENTS</p>
            <p>Trade Shows</p>
            <p>Conferences</p>
            <p>Events by Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
