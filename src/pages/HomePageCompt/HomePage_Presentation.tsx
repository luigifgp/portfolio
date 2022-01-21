import React,{MouseEvent, useState} from 'react';
import Letter from '../../components/AnimatedLetter';



const Presentation: React.FunctionComponent = () => {
  return (
    <>
      <div className="xl:text-5xl inline-block cursor-pointer">
        <Letter letter="H" className="" duration={1000} />
        <Letter letter="i" className="" duration={1050} />
        <Letter letter="," className="" duration={1100} />
      </div>
      <div className=" leading-5 cursor-pointer">
        <Letter letter="I" className="" duration={1150} />
        <Letter letter="'" className="" duration={1200} />
        <Letter letter="m" className="" duration={1250} />
        <img
          alt="logo"
          src="svg/logo-luigi.svg"
          className="ml-2 md:ml-4 h-10 w-10 sm:h-16 sm:w-16 sm:-mt-14 md:h-20 md:w-20 md:-mt-20 lg:w-24 lg:h-24 lg:  -mt-7   inline-block hover:-translate-y-12 hover:animate-wiggle transition-all  "
        />
        <Letter letter="u" className="" duration={1300} />
        <Letter letter="i" className="" duration={1350} />
        <Letter letter="g" className="" duration={1400} />
        <Letter letter="i" className="" duration={1450} />
        <Letter letter="," className="" duration={1500} />
        <div className=" leading-none  pt-4 cursor-pointer">
          <Letter letter="J" className="" duration={1550} />
          <Letter letter="u" className="" duration={1600} />
          <Letter letter="n" className="" duration={1650} />
          <Letter letter="i" className="" duration={1700} />
          <Letter letter="o" className="" duration={1750} />
          <Letter letter="r" className="" duration={1800} />
          <Letter letter="W" className="pl-4 md:pl-8" duration={1850} />
          <Letter letter="e" className="" duration={1900} />
          <Letter letter="b" className="" duration={1950} />
          <Letter letter="d" className="pl-4 md:pl-8" duration={2000} />
          <Letter letter="e" className="" duration={2050} />
          <Letter letter="v" className="" duration={2100} />
          <Letter letter="e" className="" duration={2150} />
          <Letter letter="l" className="" duration={2200} />
          <Letter letter="o" className="" duration={2250} />
          <Letter letter="p" className="" duration={2300} />
          <Letter letter="e" className="" duration={2350} />
          <Letter letter="r" className="" duration={2400} />
        </div>
      </div>
    </>
  );
};

export default Presentation;