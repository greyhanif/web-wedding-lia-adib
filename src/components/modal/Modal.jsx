import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./modal.css";
import Button from "@mui/material/Button";
// import ECorner from "../../assets/images/element/corner.png";
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
          <div className="i">
            <div className="" id="section-hero">
              <img
                className="img-fluid "
                src={
                  "https://lh3.googleusercontent.com/fife/AAWUweXPZGEzY6fIUTX_OhGLYkscdmiOhcvrQEgXFCplnCRb3ieb3WIqbsiWW0f-n2AauNlIArMy4Z8bn0_nsDQBZ8-KZ0JKlKcn2BYfZ-PWQef2JQTh5ng_6Y1C5zwJsUrmdZHQIbQhGFEkLBr2tBAjysY28K7NJ7aCh0RjNf-bLk74Xer__54XRxrDK0aamFvTDAwE5JV4s_8gEfJdKywdZuuPrhvz0fUMKekJeWBp2-uNCdaef2ODyilJeynPBCvG3lg--LWgapy02ojQQGwmz4-u8kwMTXSqlTMEHwP4GCIEKcqXLCioTCqEz51Shq2QU9fQEtwM_kY_tB1vk_2VbnOLFJKeaPHaLsAvqUEs3qOXhPQNffizqJhubbQFO7lQfJmIOON9wbzor5jNlJY30lpUKUQ5yl2TqRnVCW2uvIGraerO47IYCzDhU5CkSv1spDbfs-TFZHZw9bVgxpbBTLOjNHg3UUv1JeroWYBLgi2JK3ve3PDlrC37KsvlCH_nxaTqUE4vvyinTKxDJVLeNsjB47Lxj5-hnmbkn9n76JtjJ1ilSOn68pn3C-A_5vJgUT9DD1MlKrMO15XGDs9QCGDs2qrr4zCOzHIZ-H1guoO67sOyH1rpXjAveaYVM5J1e154vLutjb7sijbv5JqeBlJaGlvKCo3nC6L19EzVZDlGh2zGyVsl-rqiLkloPqzazlsJI4fY1YRwTqoARYhsYq8P9T0xaX3r9Q=w2000-h2000-ft"
                }
              />
              <div className="overlay-header carousel-caption   animate__animated animate__zoomIn">
                <div className="">
                  <div className="modal-title animate__animated animate__backInDown">UNDANGAN PERNIKAHAN</div>
                  <div className="modal-bride-name animate__animated animate__backInLeft">Lia & Adib</div>
                  <div className="modal-title animate__animated animate__flipInX">22.01.2022</div>
                </div>
                <div onClick={handleClose} className="wrapper-content text-start mx-2">
                  <Label className="label  animate__flipInX" />
                  <Button className="mt-5 button-modal animate__animated animate__pulse" onClick={handleClose} fullWidth size="large" variant="contained" color="secondary">
                    BUKA UNDANGAN
                  </Button>
                </div>
              </div>
            </div>

            {/* <img className="e-corner-top" src={ECorner}></img> */}

            {/* <img className="e-corner-bottom" src={ECorner}></img> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
