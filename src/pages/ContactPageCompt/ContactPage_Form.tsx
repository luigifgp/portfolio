import React, {useState} from "react";
import  emailjs  from "emailjs-com";
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitted, modalOpen } from '../../store/action/index';
import { getFormSubmittedSlector } from '../../store/selectors';
import ContactPopUp from "./ContactPopup";
import ModalPopUp from "../../components/Modal";


interface MessageForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FunctionComponent = () => {


      const getformSubmitted = useSelector(getFormSubmittedSlector);
      const dispatch = useDispatch();
  

      ///Form handle
      const [messageForm, setMessageForm] = useState<HTMLFormElement | string>("");
      const [searchString, setSearchString] = useState<string>("");


      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      /// send message by emailjs to an email
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
            dispatch(modalOpen(true))
            setTimeout(() => {dispatch(modalOpen(false))}, 2000);
        })
        .catch((err) => console.log(err));
    };

   const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
     setSearchString(e.target.value);
   };


   
  return (
    <div className="p-6 sm:p-10 xl:mb-32  sm:rounded-md bg-DarkModeDark bg-opacity-80 ">
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
            onClick={() => setSearchString(" ")}
            onFocus={() => setSearchString("")}
            typeof="text"
            value={searchString}
            onChange={handleTextArea}
            name="message"
            className=" pb-64 -mb-8"
            placeholder="Leave your message here..."
            required
            rows={5}
            cols={5}
          />
          <span className="input_span -mb-8"> </span>
        </div>
        <div className="">
          <button
            type="submit"
            disabled={getformSubmitted}
            className="lg:px-7 button"
          >
            Send message!
          </button>
        </div>
      </form>
      <div className="">
        <ModalPopUp  box={<ContactPopUp/>} />
      </div>
    </div>
  );
};

export default ContactForm;
