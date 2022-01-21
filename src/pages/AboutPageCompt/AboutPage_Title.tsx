import React from 'react';
import Letter from '../../components/AnimatedLetter';


const AboutTitle: React.FunctionComponent = () => {
    return (
      <div className=" xl:justify-self-start ">
        <Letter letter="A" className="text-OrangeColor " />
        <Letter letter="b" className="text-OrangeColor" />
        <Letter letter="o" className="text-OrangeColor" />
        <Letter letter="u" className="text-OrangeColor" />
        <Letter letter="t" className="text-OrangeColor" />
        <Letter letter="m" className="pl-4 md:pl-8 text-OrangeColor" />
        <Letter letter="e" className="text-OrangeColor" />
      </div>
    );
} 
 export default AboutTitle;

