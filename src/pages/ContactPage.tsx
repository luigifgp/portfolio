import React from "react";
import ContactForm from "./ContactPageCompt/ContactPage_Form";
import ContactTitle from "./ContactPageCompt/ContactPage_Title";
import GoogleMapLocation from './ContactPageCompt/ContactGoogleMap';
import { IoLocationSharp } from "react-icons/io5";

const ContactPage: React.FunctionComponent = () => {
  return (
    <div className="contactpage">
      <div className="grid grid-flow-row gap-0 items-center p-10 xl:p-0 ">
        <ContactTitle />
        <ContactForm />
      </div>
      <div className="h-screen p-[2rem] lg:p-0 leading-6 relative">
        <div className=" bg-PurpleColor bg-opacity-80  lg:w-80 w-44 h-26 p-4 rounded-md text-center absolute z-20 left-9 top-10">
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
