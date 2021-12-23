import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./modal.css";
import Button from "@mui/material/Button";
import ECorner from "../../assets/images/element/corner.png";
import Label from "../label/Label";
// import Confetti from "../Confetti";
import "animate.css/animate.min.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onLoad={handleOpen}>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box xs={style}>
          <div className="i p-4">
            {/* <img className="e-corner-top" src={ECorner}></img> */}
            <div className="wrapper-top">
              <div className="modal-title animate__animated animate__backInDown">UNDANGAN PERNIKAHAN</div>
              <div className="modal-bride-name animate__animated animate__backInLeft">Lia & Adib</div>
              <div className="modal-title animate__animated animate__flipInX">22.01.2022</div>
            </div>
            <div onClick={handleClose} className="wrapper-content">
              <Label className="label animate__flipInX" />
              <Button className="mt-5 button-modal animate__animated animate__pulse" onClick={handleClose} fullWidth size="large" variant="contained" color="secondary">
                BUKA UNDANGAN
              </Button>
            </div>
            {/* <img className="e-corner-bottom" src={ECorner}></img> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
