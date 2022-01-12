import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaCheckCircle } from 'react-icons/fa';



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

interface ContactPopupProps{
    isActive: boolean
}

const ContactPopUp: React.FunctionComponent<ContactPopupProps> = (props) => {

   

      useEffect(() => {
        setOpen(props.isActive);
      },[props.isActive]);

    
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
            I will check your email as soon as possible.
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactPopUp;

