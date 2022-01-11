import React from "react";

const ContactForm: React.FunctionComponent = () => {
  return (
    <div className="p-10  sm:rounded-md w-9/12 bg-DarkModeDark bg-opacity-80 ">
      <form autoComplete="off" className="grid gap-4" method="POST">
        <div className="grid grid-flow-col gap-8 ">
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
            autoComplete="off"
            name="message"
            className=" h-72"
            rows={3}
            placeholder="Leave your message here..."
            required
          ></textarea>
          <span className="input_span"> </span>
        </div>
        <div className="">
          <button type="submit" className="button">
            Send message!
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
