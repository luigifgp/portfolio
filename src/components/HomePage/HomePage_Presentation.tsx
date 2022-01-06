import React,{MouseEvent, useState} from 'react';
import Letter from './Letter';



const Presentation = () => {

 

    return (
      <>
        <div className="xl:text-5xl inline-block">
          <Letter letter="H" className="" />
          <Letter letter="i" className="" />
          <Letter letter="," className="" />
        </div>
        <div className=" leading-3 ">
          <Letter letter="I" className="" />
          <Letter letter="'" className="" />
          <Letter letter="m" className="" />
          <Letter letter="L" className="pl-8" />
          <Letter letter="u" className="" />
          <Letter letter="i" className="" />
          <Letter letter="g" className="" />
          <Letter letter="i" className="" />
          <Letter letter="," className="" />
          <div className=" leading-none pt-4">
            <Letter letter="J" className="" />
            <Letter letter="u" className="" />
            <Letter letter="n" className="" />
            <Letter letter="i" className="" />
            <Letter letter="o" className="" />
            <Letter letter="r" className="" />
            <Letter letter="W" className="pl-8" />
            <Letter letter="e" className="" />
            <Letter letter="b" className="" />
            <Letter letter="d" className="pl-8" />
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
}

export default Presentation;