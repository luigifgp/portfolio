import React,{MouseEvent, useState} from 'react';
import Letter from './Letter';



const Presentation: React.FunctionComponent = () => {
  return (
    <>
      <div className="xl:text-5xl inline-block">
        <Letter letter="H" className="" />
        <Letter letter="i" className="" />
        <Letter letter="," className="" />
      </div>
      <div className=" leading-5 ">
        <Letter letter="I" className="" />
        <Letter letter="'" className="" />
        <Letter letter="m" className="" />
        <img
          src="svg/logo-luigi.svg"
          className="ml-2 md:ml-4 h-10 w-10 sm:h-16 sm:w-16 sm:-mt-14 md:h-20 md:w-20 md:-mt-20 lg:w-24 lg:h-24 lg:  -mt-7   inline-block hover:-translate-y-12 hover:animate-wiggle transition-all"
        />
        <Letter letter="u" className="" />
        <Letter letter="i" className="" />
        <Letter letter="g" className="" />
        <Letter letter="i" className="" />
        <Letter letter="," className="" />
        <div className=" leading-none  pt-4">
          <Letter letter="J" className="" />
          <Letter letter="u" className="" />
          <Letter letter="n" className="" />
          <Letter letter="i" className="" />
          <Letter letter="o" className="" />
          <Letter letter="r" className="" />
          <Letter letter="W" className="pl-4 md:pl-8" />
          <Letter letter="e" className="" />
          <Letter letter="b" className="" />
          <Letter letter="d" className="pl-4 md:pl-8" />
          <Letter letter="e" className="" />
          <Letter letter="v" className="" />
          <Letter letter="e" className="" />
          <Letter letter="l" className="" />
          <Letter letter="o" className="" />
          <Letter letter="p" className="" />
          <Letter letter="e" className="" />
          <Letter letter="r" className="" />
        </div>
      </div>
    </>
  );
};

export default Presentation;