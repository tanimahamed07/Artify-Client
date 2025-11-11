import React from 'react';
import bannerPng from '../../assets/banner.png'
import { Fade } from 'react-awesome-reveal';
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <Fade>
          <img
            src={bannerPng}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className='space-y-3'>
            <Fade direction='down' triggerOnce={true}>
            <div className='flex items-center gap-4 text-xl'>
              <p className='text-primary'>August 20</p>
              <hr className="border-secondary flex-1 border-t" />
            </div>
            </Fade>
            <Fade triggerOnce={true}>
            <h1 className="text-4xl md:text-5xl font-bold">ROJO Y NEGRO! LATIN <br /> AMERICAN ART</h1>
            </Fade>
            <Fade direction='up' triggerOnce={true}>
            <p className="py-6 text-gray-500">
              The exhibition is made possible by the Laurn & C. Arnoled Douglas Foundation
            </p>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;