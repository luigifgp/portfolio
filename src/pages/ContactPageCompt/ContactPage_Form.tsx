import React, {FormEventHandler, useState} from "react";
import  emailjs  from "emailjs-com";
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitted } from '../../store/action/index';
import { getFormSubmittedSlector } from '../../store/selectors';
import ContactPopUp from "./ContactPopup";


interface MessageForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FunctionComponent = () => {


    const [messageForm, setMessageForm] = useState<HTMLFormElement | string>("");

    const [searchString, setSearchString] = useState<any>("Leave your message here...");

    const dispatch = useDispatch();
     const getformSubmitted = useSelector(getFormSubmittedSlector);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       
      event.preventDefault();
      setMessageForm(event.currentTarget);
      emailjs
        .sendForm(
          "service_5forcpi",
          "template_oj8znrt",
          messageForm,
          process.env.REACT_APP_EMAILJS_USERID
        )
        .then((res) => {
           dispatch(formSubmitted(true));
        })
        .catch((err) => console.log(err));
    };

   const handleTextArea = (e: any) => {
        setSearchString(e.target.value);
    }


  return (
    <div className="p-10 xl:mb-32  sm:rounded-md bg-DarkModeDark bg-opacity-80 ">
      <form onSubmit={onSubmit} autoComplete="off" className="grid gap-4">
        <div className="grid grid-flow-col gap-4 ">
          <div className="input_container">
            <input
              autoComplete="off"
              name="name"
              type="text"
              className=""
              placeholder="Name"
              required
            />
            <span className="input_span"></span>
          </div>
          <div className="input_container">
            <input
              autoComplete="off"
              name="email"
              type="email"
              className=""
              placeholder="Email"
              required
            />
            <span className="input_span"></span>
          </div>
        </div>
        <div className="input_container">
          <input
            autoComplete="off"
            name="subject"
            type="text"
            className=""
            placeholder="Subject"
            required
          />
          <span className="input_span"></span>
        </div>
        <div className="input_container">
          <textarea
            value={searchString}
            onChange={handleTextArea}
            name="message"
            className=" h-72"
            cols={3}
            rows={3}
            placeholder="Leave your message here..."
            required
          ></textarea>
          <span className="input_span"> </span>
        </div>
        <div className="">
          <button type="submit" disabled={getformSubmitted} className="button">
            Send message!
          </button>
        </div>
      </form>
      <div>
        <ContactPopUp isActive={getformSubmitted && getformSubmitted} />
      </div>
    </div>
  );
};

export default ContactForm;
