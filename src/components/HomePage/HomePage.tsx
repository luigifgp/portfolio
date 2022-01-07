import React from 'react';
import Presentation from './HomePage_Presentation';
import HamburgerIcon from '../Sidebar/HamburgerIcon';


function HomePage() {
    return (
      //TODO DARKMODE bg-slate-200 dark:
      <div className="grid ">
        <div className="justify-self-end mr-40 -mt-2 opacity-30 w-1/5 h-4/5 absolute bg-PurpleColor rounded-lg z-10" />
        <div className="justify-self-start ml-2 mt-32 opacity-20 w-1/5 h-5/6 absolute bg-PurpleColor rounded-lg z-10" />
        <div className="justify-self-end mt-48 opacity-10 w-10/12 h-2/4 absolute bg-PurpleColor rounded-lg z-10" />
        <div className="homepage">
          <Presentation />
          <p className="mt-7 text-lg sm:text-2x1 md:text-3x1 lg:texl-4xl text-gray-500 italic">
            Fullstack Developer / React TS
          </p>

          <button className="mt-12 animate-pulse text-sm md:text-lg grid justify-self-start justify-start pl-6 pr-6  lg:pl-14 lg:pr-14 p-2 lg:p-3 text-OrangeColor border-OrangeColor font-bold border-2 hover:text-white hover:animate-none hover:bg-OrangeColor focus:bg-OrangeColor transition-all duration-700">
            Contact me!
          </button>
        </div>
      </div>
    );
}

export default HomePage;