import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSidebarSelector } from '../../store/selectors';
import { sidebarA } from '../../store/action/index';
import { portfolioState } from '../../store/types/storeTypes';

const HamburgerIcon: React.FunctionComponent = () => {
  const sidebar: boolean = useSelector(getSidebarSelector);
  const dispatch = useDispatch();
  return (
    <div className=" fixed  z-30 xl:hidden">
      {/* Hamburger Icon */}
      <button
        className={` "  bg-DarkModeDark rounded-full top-8 right-5 z-30 relative  w-16 h-12 text-white focus:outline-none " ${
          sidebar
            ? "translate-x-44 transition-all duration-700"
            : "translate-x-0 transition-all duration-300"
        }`}
        onClick={() => dispatch(sidebarA(!sidebar))}
      >
        <div className="absolute w-5  transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              sidebar ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              sidebar ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              sidebar ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default HamburgerIcon;
