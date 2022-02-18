import React, { useEffect, useState } from "react";
import  emailjs  from "emailjs-com";
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitted, modalOpen, formData } from '../../store/action/index';
import { getFormSubmittedSelector, getFormDataSelector } from '../../store/selectors';
import ContactPopUp from "./ContactPopup";
import ModalPopUp from "../../components/Modal";
import { FormData } from "../../store/types/storeTypes";



const ContactForm: React.FunctionComponent = () => {
  const getFormSubmitted = useSelector(getFormSubmittedSelector);

  const dispatch = useDispatch();

  ///Form handle
  const [messageForm, setMessageForm] = useState<HTMLFormElement | string>("");
  const [formMessage, setFormMessage] = useState<FormData>({});

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
        dispatch(formData(emptyForm));
        dispatch(modalOpen(true));

        setTimeout(() => {
          dispatch(modalOpen(false));
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  ///
  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: " ",
  };

  /// form values

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    dispatch(formData(formMessage));
  };

  const formDataAdded = useSelector(getFormDataSelector) as FormData;

  useEffect(() => {
    setFormMessage(formDataAdded);
  }, [formDataAdded]);

  return (
    <div className="p-6 sm:p-10 xl:mb-32  sm:rounded-md bg-DarkModeDark bg-opacity-80 ">
      <form onSubmit={onSubmit} autoComplete="off" className="grid gap-4">
        <div className="grid grid-flow-col gap-4 ">
          <div className="input_container animate-[fadeInUp_1.2s_both]  ">
            <input
              autoComplete="off"
              name="name"
              type="text"
              className=""
              placeholder="Name"
              value={formMessage.name}
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <span className="input_span"></span>
          </div>
          <div className="input_container animate-[fadeInUp_1.4s_both] ">
            <input
              autoComplete="off"
              name="email"
              type="email"
              className=""
              placeholder="Email"
              value={formMessage.email}
              onChange={(e) => handleChangeInput(e)}
              required
            />
            <span className="input_span"></span>
          </div>
        </div>
        <div className="input_container animate-[fadeInUp_1.6s_both] ">
          <input
            autoComplete="off"
            name="subject"
            type="text"
            className=""
            placeholder="Subject"
            value={formMessage.subject}
            onChange={(e) => handleChangeInput(e)}
            required
          />
          <span className="input_span"></span>
        </div>
        <div className="input_container animate-[fadeInUp_1.8s_both]  ">
          <textarea
            onClick={() =>
              !formMessage.message && setFormMessage({ message: " " })
            }
            onFocus={() =>
              !formMessage.message && setFormMessage({ message: " " })
            }
            typeof="text"
            name="message"
            className=" pb-64 -mb-8"
            placeholder="Leave your message here..."
            value={formMessage.message}
            onChange={(e) => handleChangeInput(e)}
            required
            rows={5}
            cols={5}
          />
          <span className="input_span -mb-8"> </span>
        </div>
        <div className="animate-[fadeInUp_3s_both]  ">
          <button
            type="submit"
            disabled={getFormSubmitted}
            className="lg:px-7 button"
          >
            Send message!
          </button>
        </div>
      </form>
      <div className="">
        <ModalPopUp box={<ContactPopUp />} />
      </div>
    </div>
  );
};

export default ContactForm;
