import React, { ReactElement } from "react";
import Modal from "@mui/material/Modal";
import { modalOpenSelector } from '../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../store/action/index';



export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 24,
  p: 4,
};



interface ContactPopupProps {
  box: ReactElement;
}


const ModalPopUp: React.FunctionComponent<ContactPopupProps> = (props) => {
  
  //  Modal handle
  const modalActive: boolean = useSelector(modalOpenSelector);
  const dispatch = useDispatch(); 

  const handleClose = () => {
    dispatch(modalOpen(false));
  };


  return (
    <div>
      <Modal
        open={modalActive}
        ///ToDo check this onClose
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          
      <> {props.box}</>
      </Modal>
    </div>
  );
};

export default ModalPopUp;
