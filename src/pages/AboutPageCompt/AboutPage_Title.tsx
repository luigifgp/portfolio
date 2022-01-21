import React from 'react';
import Letter from '../../components/AnimatedLetter';


const AboutTitle: React.FunctionComponent = () => {
    return (
      <div className=" xl:justify-self-start ">
        <Letter letter="A" className="text-OrangeColor " duration={1000} />
        <Letter letter="b" className="text-OrangeColor" duration={1050} />
        <Letter letter="o" className="text-OrangeColor" duration={1100} />
        <Letter letter="u" className="text-OrangeColor" duration={1150} />
        <Letter letter="t" className="text-OrangeColor" duration={1200} />
        <Letter
          letter="m"
          className="pl-4 md:pl-8 text-OrangeColor"
          duration={1250}
        />
        <Letter letter="e" className="text-OrangeColor" duration={1300} />
      </div>
    );
} 
 export default AboutTitle;

