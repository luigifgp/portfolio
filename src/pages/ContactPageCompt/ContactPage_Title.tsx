import React from 'react';
import Letter from '../../components/Letter';

const ContactTitle:React.FunctionComponent = () => {
    return (
      <div className="  ">
        <Letter letter="C" className="text-OrangeColor " />
        <Letter letter="o" className="text-OrangeColor" />
        <Letter letter="n" className="text-OrangeColor" />
        <Letter letter="t" className="text-OrangeColor" />
        <Letter letter="a" className="text-OrangeColor" />
        <Letter letter="c" className=" text-OrangeColor" />
        <Letter letter="t" className="text-OrangeColor" />
        <Letter letter="m" className="pl-4 md:pl-8 text-OrangeColor" />
        <Letter letter="e" className="text-OrangeColor" />
      </div>
    );
    
}
export default ContactTitle;