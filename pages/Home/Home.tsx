import React from 'react';
import LineSvg from '../../components/Line';
import SquareSvg from '../../components/Square';
import SquareSvg02 from '../../components/square_02';
import LineSvg02 from '../../components/Line_02';

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        {/* Back division */}
        <div className="absolute top-0 left-0 h-full w-full flex">
          <div className="h-full w-8/12 bg-customColor1"></div>
          <div className="h-full w-4/12 bg-customColor2"></div>
        </div>

        {/* Middle division */}
        <div className="relative z-10 h-full w-full">
          <div className='absolute top-10 left-3/ customColor1'>
            <SquareSvg />
          </div>
          <div className='absolute top-20 left-20'>
            <SquareSvg02 />
          </div>
          <div className='absolute top-30 left-30'>
            <LineSvg02 />
          </div>
          <div className='absolute top-40 left-40'>
            <LineSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
