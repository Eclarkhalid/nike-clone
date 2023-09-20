import React from 'react'
import Button from './Button'

import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return <>
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">

      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We provide you <span className='text-coral-red inline-block mt-3'>Super </span>
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Explore Nike's world of premium sportswear and athletic footwear. Discover top-quality products designed to enhance your athletic performance and style. Shop the latest collections and enjoy unbeatable comfort and style. Join the Nike community today.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Dive into our latest collections, offering unparalleled comfort and unmatched style. Be a part of the Nike community today and experience the epitome of sportswear excellence."
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />
      </div>
    </section>
  </>
}

export default SuperQuality