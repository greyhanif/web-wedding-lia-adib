import * as React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import "./userNav.css";
import "../card/passCard.css";
import QRCode from "react-qr-code";
import { Container, CssBaseline } from "@mui/material";

const UserNav = () => {
  var [open, setOpen] = useState(false);
  // var handleOpen = () => setOpen(true);
  var handleClose = () => setOpen(false);

  function handleOpen() {
    if (open === false) {
      setOpen(true);
    }
    if (open === true) {
      setOpen(false);
    }
  }

  console.log(open);

  return (
    <div className="force-left">
      {open && (
        <div className="modal-qr" onClick={handleClose}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="p-5">
                <div className=" card-qr line">
                  <div className="pass-card">
                    <div className="mt-2">PASS CARD</div>
                  </div>
                  <div className="right">
                    <div className="title-card-qr bold bride-name-pass">Lia & Adib</div>
                    <div className="ml-3 wedding">wedding</div>
                  </div>
                  <div className="">
                    <QRCode className="qr" level="L" size={170} bgColor="#fcf7f1" fgColor="#000000" value={sessionStorage.getItem("ticketCode")} />
                    {/* <img className="qr" src="https://socs.binus.ac.id/files/2018/12/aswin-1.jpg" alt="" /> */}
                    <div className="ml-3 code-ticket mt-2">{sessionStorage.getItem("ticketCode")}</div>
                    <div className="ml-3 name bold">
                      {sessionStorage.getItem("title") === "null" ? "" : sessionStorage.getItem("title")} {sessionStorage.getItem("name")}
                    </div>
                    <div className="ml-3 city mt-1">{sessionStorage.getItem("city") === "null" ? sessionStorage.getItem("organization") : sessionStorage.getItem("city")}</div>
                  </div>
                </div>
                <Button className="button" onClick={handleClose} fullWidth size="large" variant="contained" color="secondary">
                  Kembali
                </Button>
              </div>
            </Box>
          </Container>
        </div>
      )}

      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Button color="inherit" component="div" sx={{ flexGrow: 1 }}>
            Kepada, {sessionStorage.getItem("title") === "null" ? "" : sessionStorage.getItem("title")} {sessionStorage.getItem("name")}
          </Button>
          <Button onClick={handleOpen} color="secondary" variant="contained" startIcon={<QrCode2OutlinedIcon />} disableElevation>
            CODE
          </Button>
          {/* <BottomNavigationAction href="#section-pesan-doa" label="Pesan" icon={<MessageIcon />} /> */}
          {/* <Button color="inherit">QR Code</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default UserNav;
