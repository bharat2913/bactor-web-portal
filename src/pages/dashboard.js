import React, { useState } from 'react';
import Header from '../components/header';
import Slice from '../components/slice';
import Card2 from '../components/card2';
import Footer from '../components/footer';

export default function Dashboard() {
  const image = [
    {
      key: 1,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
      alt: 'Top Offer',
    },
    {
      key: 2,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
      alt: 'Grocery',
    },
    {
      key: 3,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      alt: 'Mobiles',
    },
    {
      key: 4,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100',
      alt: 'Fashion',
    },
    {
      key: 5,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
      alt: 'Electronics',
    },
    {
      key: 6,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
      alt: 'Home',
    },
    {
      key: 7,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
      alt: 'Travel',
    },
    {
      key: 8,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      alt: 'Mobiles',
    },
    {
      key: 9,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100',
      alt: 'Fashion',
    },
    {
      key: 10,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
      alt: 'Electronics',
    },
    {
      key: 11,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
      alt: 'Home',
    },
    {
      key: 12,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
      alt: 'Travel',
    },
  ];

  const slices = [
    {
      title: 'Pharmaceutical Drug, Medicine, Medical Care & Consultation',
      banner: 'https://hm.imimg.com/imhome_gifs/bigBn06.jpg',
      cardDetails: [
        {
          title: 'Pharmaceutical Drug',
          thumbnail:
            'https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg',
          data: [
            'Tocilizumab',
            'FabiFlu',
            'Remdesivir',
            'Ivermectin',
            'Doxycycline',
            'Deflazacort',
          ],
        },
        {
          title: 'Nutraceuticals',
          thumbnail:
            'https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg',
          data: [
            'Zinc Sulphate Tablets',
            'Vitamin C Tablets',
            'Zincovit Tablets',
            'Multivitamin Syrup',
            'Vitamin D3',
          ],
        },
        {
          title: 'Fitness Supplements',
          thumbnail:
            'https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png',
          data: [
            'Weight Gain Nutrition',
            'Weight Gain Capsule',
            'Immune Booster',
          ],
        },
      ],
    },
    {
      title: 'Hygiene, Personal Care and Cleaning Supplies',
      banner: 'https://hm.imimg.com/imhome_gifs/bigBn02.jpg',
      cardDetails: [
        {
          title: 'Hand Sanitizer & Disinfectant',
          thumbnail:
            'https://5.imimg.com/data5/LQ/TI/FF/GLADMIN-3061/purell-advanced-hand-sanitizer-125x125.jpg',
          data: [
            'Hand Sanitizer Spray',
            'Lifebuoy Hand Sanitizer',
            '3M Hand Sanitizer',
            'Dettol Hand Sanitizer',
          ],
        },
        {
          title: 'Tissue Paper',
          thumbnail:
            'https://5.imimg.com/data5/XG/DF/MY-2045391/tissue-papers-and-roles-125x125.jpg',
          data: [
            'Toilet Paper Roll',
            'Cotton Towel',
            'Tissue Napkin',
            'Wet Wipes',
          ],
        },
        {
          title: 'Hand Soap',
          thumbnail:
            'https://5.imimg.com/data5/SR/TL/MY-4313393/hand-wash-liquid-soaps-125x125.jpg',
          data: [
            'Liquid Hand Wash',
            'Lifebuoy Hand Wash',
            'Hand Washing Gels',
            'Paper Soap',
          ],
        },
        {
          title: 'Mops ',
          thumbnail:
            'https://5.imimg.com/data5/WP/ZE/XX/ANDROID-22468/product-jpeg-125x125.jpg',
          data: [
            'Cotton Mop',
            'Magic Mop',
            'Twist Mop',
            'Microfiber Mop',
            'Sponge Mops',
          ],
        },
      ],
    },
    {
      title: 'Medical Essential , Safety & Protective Clothing and Apparel',
      banner: 'https://hm.imimg.com/imhome_gifs/bigBn01.jpg',
      cardDetails: [
        {
          title: 'Face Mask',
          thumbnail: 'https://hm.imimg.com/imhome_gifs/cvid02.png',
          data: [
            '3 Ply Face Mask',
            'Disposable Face Mask',
            'Nose Masks',
            'N95 Respirator Mask',
          ],
        },
        {
          title: 'Oxygen Supplies',
          thumbnail:
            'https://3.imimg.com/data3/TH/GC/GLADMIN-56254/oxygen-cylinders-125x125.jpg',
          data: ['Oxygen Cylinder', 'Oxygen Concentrator', 'Oxygen Flow Meter'],
        },
        {
          title: 'Surgical Caps',
          thumbnail:
            'https://5.imimg.com/data5/FR/RK/MY-9882376/disposable-surgical-cap-125x125.jpg',
          data: ['Bouffant Caps', 'Nurse Cap', 'Disposable Cap'],
        },
        {
          title: 'Personal Protective Equipment',
          thumbnail:
            'https://5.imimg.com/data5/SI/XQ/MB/GLADMIN-73621/coronavirus-ppe-kit-125x125.png',
          data: [
            'Hazmat Suit',
            'Face Shields ',
            'Disposable Gloves',
            'Disposable Face Mask',
          ],
        },
      ],
    },
    {
      title: 'Hospital and Medical Equipment',
      banner: 'https://hm.imimg.com/imhome_gifs/bigBn04.jpg',
      cardDetails: [
        {
          title: 'Diagnostic Test Kit',
          thumbnail: 'https://hm.imimg.com/imhome_gifs/cvid09.png',
          data: [
            'Coronavirus Test Kit',
            'RNA Extraction Kit',
            'Bacteria Test Kits',
            'Bacteria Test Kits',
          ],
        },
        {
          title: 'Patient Monitoring Systems',
          thumbnail:
            'https://5.imimg.com/data5/IW/EI/MY-3076857/patient-monitoring-system-125x125.jpg',
          data: [
            'Blood Pressure Machine',
            'Capnometer',
            'Medical Monitor',
            'Surgical Monitor',
            '',
          ],
        },
        {
          title: 'Thermometer',
          thumbnail:
            'https://5.imimg.com/data5/NT/KF/MY-1383163/infrared-thermometer-125x125.jpg',
          data: [
            'Infrared Thermometers',
            'Forehead Thermometer',
            'Digital Thermometers',
          ],
        },
        {
          title: 'Medical Ventilators ',
          thumbnail:
            'https://5.imimg.com/data5/CM/CP/JH/SELLER-5038493/neonatal-portable-icu-ventilator-125x125.jpg',
          data: [
            'ICU Ventilator',
            'Transport Ventilator',
            'Siemens Ventilator',
            'Ventilator Circuits',
          ],
        },
        {
          title: 'Stethoscope',
          thumbnail:
            'https://5.imimg.com/data5/OQ/SV/MY-905156/stethoscope-cardio-125x125.jpg',
          data: [
            'Cardiology Stethoscope',
            'Dual Head Stethoscope',
            'Electronic Stethoscope',
          ],
        },
        {
          title: 'Suction Machine',
          thumbnail:
            'https://5.imimg.com/data5/NU/ZZ/AQ/SELLER-35236796/electric-suction-unit-125x125.jpg',
          data: [
            'Electric Suction Unit',
            'Liposuction Machine',
            'Central Suction System',
          ],
        },
      ],
    },
    {
      title: 'Packaging Material, Supplies & Machines',
      banner: 'https://hm.imimg.com/imhome_gifs/bigBn05.jpg',
      cardDetails: [
        {
          title: 'Plastic Bottles',
          thumbnail: 'https://hm.imimg.com/imhome_gifs/cvid06.png',
          data: [
            'PET Bottles',
            'HDPE Bottle',
            'Plastic Spray Bottle',
            'Transparent Plastic Bottles',
            'Packaging Bottles',
          ],
        },
        {
          title: 'Cap Closures',
          thumbnail:
            'https://5.imimg.com/data5/HA/AE/QZ/SELLER-9151136/flip-top-bottle-cap-125x125.jpg',
          data: [
            'Bottle Caps',
            'Jar Cap',
            'Metal Caps',
            'Flip Top Caps',
            'Screw Caps',
          ],
        },
        {
          title: 'Packaging Pouch',
          thumbnail:
            'https://4.imimg.com/data4/ED/XH/MY-4373725/packaging-pouch-125x125.jpg',
          data: ['Plastic Pouches', 'Stand Up Pouch', 'Paper Pouch'],
        },
        {
          title: 'Packaging Machines',
          thumbnail:
            'https://5.imimg.com/data5/VX/HN/DZ/SELLER-3217085/packaging-machine-125x125.png',
          data: [
            'Pouch Packaging Machines',
            'Shrink Packaging Machines',
            'Vacuum Packaging Machines',
          ],
        },
        {
          title: 'Vertical Form Fill Seal Machines',
          thumbnail: 'https://hm.imimg.com/imhome_gifs/cvid06.png',
          data: [
            'Powder Packaging Machine',
            'Liquid Packaging Machinery',
            'Snack Packing Machine',
          ],
        },
      ],
    },
    {
      title: 'Food, Agriculture & Farming',
      banner: 'https://hm.imimg.com/imhome_gifs/vegetable-fruits.png',
      cardDetails: [
        {
          title: 'Rice',
          thumbnail:
            'https://5.imimg.com/data5/LQ/TI/FF/GLADMIN-3061/purell-advanced-hand-sanitizer-125x125.jpg',
          data: [
            'Basmati Rice',
            'Kolam Rice',
            'Ponni Rice',
            'Sona Masoori Rice',
          ],
        },
        {
          title: 'Wheat',
          thumbnail:
            'https://3.imimg.com/data3/JQ/XB/GLADMIN-3396/wheat-125x125.jpg',
          data: ['Wheat Grains', 'Milling Wheat', 'Lokwan Wheat'],
        },
        {
          title: 'Pulses',
          thumbnail:
            'https://3.imimg.com/data3/QL/BL/GLADMIN-1571/pulses-125x125.jpg',
          data: ['Toor Dal', 'Chana Dal', 'Urad Dal', 'Moong Dal'],
        },
        {
          title: 'Fresh Vegetables',
          thumbnail: 'https://hm.imimg.com/imhome_gifs/veg01.png',
          data: ['Potato', 'Tomato', 'Onion', 'Mushroom'],
        },
        {
          title: 'Whole Spices',
          thumbnail:
            'https://5.imimg.com/data5/LO/QY/EQ/SELLER-84813594/garam-masala-powder-500x500.jpg',
          data: ['Green Cardamom', 'Black Pepper', 'Cardamom', 'Turmeric'],
        },
        {
          title: 'Seeds',
          thumbnail:
            'https://5.imimg.com/data5/QK/BB/TN/SELLER-5388819/pumpkin-seeds-2--125x125.jpg',
          data: ['Vegetable Seeds', 'Hybrid Seeds', 'Seed Spices', 'Oil Seeds'],
        },
      ],
    },
  ];

  const cardDetails = [
    {
      title: 'Earphones',
      thumbnail:
        'https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/headphone/dynamic/z/j/h/jbl-c150siublk-original-imafeyby52kxehz2.jpeg?q=70',
      price: '399',
    },
    {
      title: 'Web Cam',
      thumbnail:
        'https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70',
      price: '299',
    },
    {
      title: 'Speakers',
      thumbnail:
        'https://rukminim1.flixcart.com/image/150/150/jsrtn680/cooling-pad/f/j/z/tarkan-4-fans-original-imafe9w4gxyphh37.jpeg?q=70',
      price: '499',
    },
    {
      title: 'Keyboard Skins',
      thumbnail:
        'https://rukminim1.flixcart.com/image/150/150/j226avk0/keyboard-skin/9/a/b/laptop-ad-kb14-6-adnet-original-imaedq9hgbn7yy7z.jpeg?q=70',
      price: '599',
    },
    {
      title: 'Routers',
      thumbnail:
        'https://rukminim1.flixcart.com/image/150/150/jtx9evk0/router/g/g/k/d-link-dir-819-original-imaff5yhcm7fdfjr.jpeg?q=70',
      price: '799',
    },
  ];

  return (
    <div>
      <Header />
      <div className='flex flex-col mx-auto justify-start h-screen '>
        {/* Categories */}
        <div className='flex bg-green-darkest w-full h-28 px-6 justify-between items-center'>
          {image.map((image) => (
            <div className='w-12 text-xs mx-4 text-center'>
              <img src={image.url} alt={image.alt} />
              {image.alt}
            </div>
          ))}
        </div>

        <div className='flex flex-col mx-8 my-6 gap-4 text-gray-primary'>
          <h1 className='text-5xl'>We connect Buyers & Sellers</h1>
          <p className='text-xl'>
            India's largest online B2B marketplace, connecting buyers with
            suppliers.
          </p>
        </div>

        {/* Carousal Image */}
        <img
          className='max-w-full mx-8 my-0'
          src='https://hm.imimg.com/imhome_gifs/home-banner-4.jpg'
          alt='heroImage'
        />

        <div className='flex flex-col mx-8 my-8 bg-gray-primary rounded-md p-4 shadow-lg gap-4'>
          <h2 className='text-2xl font-bold'>Trending</h2>
          <div className='flex gap-4'>
            <Card2 cardDetails={cardDetails} />
          </div>
        </div>
        <Slice slices={slices} />

        <Footer />
      </div>
    </div>
  );
}
