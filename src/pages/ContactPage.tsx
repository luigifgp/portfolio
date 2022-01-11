import React from "react";
import ContactForm from "./ContactPageCompt/ContactPage_Form";
import ContactTitle from "./ContactPageCompt/ContactPage_Title";

const ContactPage: React.FunctionComponent = () => {
  return (
    <div className="contactpage">

        <div className="grid grid-flow-row">
      <ContactTitle />
      <ContactForm/>
      </div>
      <div>
        <h1>GOOGLE</h1>
      </div>
    </div>
  );
};

export default ContactPage;
