import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSidebarSelector } from '../../store/selectors';
import { sidebarA } from '../../store/action/index';
import { portfolioState } from '../../store/types/storeTypes';

const HamburgerIcon: React.FunctionComponent = () => {
  const { sidebar }: portfolioState = useSelector(getSidebarSelector);
  const dispatch = useDispatch();
  return (
    <div className="w-full fixed top-0 left-0 p-10 grid justify-end z-40">
      {/* Logo */}
      
      {/* Hamburger Icon */}
      <button
        className="xl:hidden flex top-0 right-0 z-40 relative w-10 h-10 text-white focus:outline-none"
        onClick={() => dispatch(sidebarA(!sidebar))}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
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
