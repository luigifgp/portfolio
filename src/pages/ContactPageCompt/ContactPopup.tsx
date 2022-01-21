import React from "react";
import Box from '@mui/material/Box';
import { FaCheckCircle } from 'react-icons/fa';
import { style } from "../../components/Modal";

const ContactPopUp: React.FunctionComponent = () => {

  return (
    <>
      <Box className=" rounded-md bg-DarkModeDark" sx={style}>
        <div className="grid gap-2">
          <FaCheckCircle
            className="justify-self-center fill-PurpleColor"
            size={30}
          />
          <h1
            className=" text-center text-2x1 text-PurpleColor font-Karla"
            id="modal-modal-title"
          >
            THANK YOU!
          </h1>
        </div>
        <p className="text-center content" id="modal-modal-description">
          I will check your message as soon as possible.
        </p>
      </Box>
    </>
  );
};

export default ContactPopUp;

