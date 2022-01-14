import React, { useEffect, useState } from 'react';

import  { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import HamburgerIcon from './HamburgerIcon';
import { portfolioState } from '../../store/types/storeTypes';
import { useSelector } from 'react-redux';
import { getSidebarSelector } from '../../store/selectors';



interface Routes {
    
    name: string,
    link: string,
        
    }
    

function  SideBar()  {

  const sidebar: boolean = useSelector(getSidebarSelector);
 
  const routes: Routes[] = [
    { name: "About", link: "/about" },
    { name: "My Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];


  return (
    <div className="fixed z-40 ">
      <HamburgerIcon />
      {/* ToDo DarkMode bg-white dark */}

      <div
        className={`grid w-44 h-screen bg-DarkModeDark overflow-hidden 
        transition-all duration-500 -translate-x-60  z-50 xl:translate-x-0 ${
          sidebar
            ? "-translate-x-0 transition-all duration-700"
            : "-translate-x-60 transition-all duration-300"
        }`}
      >
        <div className="h-32 shadow-zinc-900 shadow-lg   ">
          <a className="grid top-20 justify-items-center" href="/">
            <img
              className=" w-28 h-28  mt-2"
              src="/svg/logo-luigi.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="grid  justify-items-center gap-2 ">
          {routes.map((route) => (
            <ul className=" transform  transition-transform hover:translate-x-2  ease-in duration-200 text-gray-400 hover:text-OrangeColor">
              <li>
                {/* ToDo DarkMode bg-white dark */}
                <a href={route.link} className=" ">
                  <p className="text-xl  font-semibold ">{route.name}</p>
                </a>
              </li>
            </ul>
          ))}

          <div className="grid gap-3 grid-flow-col  ">
            <a href="https://github.com/luigifgp" target="_blank">
              <FaGithub className="icon_sidebar" size="28" />
            </a>
            <a href="https://www.linkedin.com/in/luigifgp/" target="_blank">
              <BsLinkedin className="icon_sidebar" size="28" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~011bd204b1d4f93ef2"
              target="_blank"
            >
              <SiUpwork className="icon_sidebar" size="28" />
            </a>
          </div>

          <div className=" grid justify-items-around mt-28   ">
            <a href="/files/luigi-cv.pdf" target="_blank">
              <svg
                className="fill-gray-700 hover:fill-PurpleColor transition-all duration-500"
                viewBox="0 0 50 50"
                width="80px"
                height="80px"
              >
                <g>
                  <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301 c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541 c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853 c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203 c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414 c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895 c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416 c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422 s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312 c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593 C19.68,25.023,19.627,25.214,19.558,25.389z" />
                  <polygon points="26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616" />
                  <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};








export default SideBar;