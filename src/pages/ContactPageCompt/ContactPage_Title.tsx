import React from 'react';
import Letter from '../../components/AnimatedLetter';

const ContactTitle:React.FunctionComponent = () => {
    return (
      <div className="   ">
        <Letter letter="C" className="text-OrangeColor " duration={1000} />
        <Letter letter="o" className="text-OrangeColor" duration={1050} />
        <Letter letter="n" className="text-OrangeColor" duration={1100} />
        <Letter letter="t" className="text-OrangeColor" duration={1150} />
        <Letter letter="a" className="text-OrangeColor" duration={1200} />
        <Letter letter="c" className=" text-OrangeColor" duration={1250} />
        <Letter letter="t" className="text-OrangeColor" duration={1300} />
        <Letter
          letter="m"
          className="pl-4 md:pl-8 text-OrangeColor"
          duration={1350}
        />
        <Letter letter="e" className="text-OrangeColor" duration={1400} />
      </div>
    );
    
}
export default ContactTitle;