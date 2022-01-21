import React from "react";
import ContactForm from "./ContactPageCompt/ContactPage_Form";
import ContactTitle from "./ContactPageCompt/ContactPage_Title";
import GoogleMapLocation from './ContactPageCompt/ContactGoogleMap';
import { IoLocationSharp } from "react-icons/io5";

const ContactPage: React.FunctionComponent = () => {
  return (
    <div className="contactpage pr-4">
      <div className="grid   mt-14 lg:mt-12 xl:gap-2 ">
        <div className=" grid justify-center lg:pl-8 lg:justify-start">
          <ContactTitle />
        </div>
        <div className=" sm:px-6 lg:pr-0 lg:-mt-14 xl:-mt-4 animate-growWidth ">
          <ContactForm />
        </div>
      </div>
      <div className="h-screen   sm:px-6 lg:p-0  leading-6 relative">
        <div className=" bg-PurpleColor bg-opacity-80  lg:w-80 w-44 h-26 p-4 rounded-md text-center absolute z-20 left-9 top-10 animate-growWidth origin-right">
          <div className="grid grid-flow-col">
            <IoLocationSharp className=" fill-slate-200" size={20} />
            <p className="lg:text-lg md:text-sm text-sm text-white">
              Rua da Vila Rosa, 8500-810 Portimão,
              <br /> Portugal <br />
            </p>
          </div>
        </div>
        <GoogleMapLocation />
      </div>
    </div>
  );
};

export default ContactPage;
