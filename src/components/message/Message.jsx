import "./message.css";
// import "../InputHint";
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Wedding Invitation Sytem
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} */}
    </Typography>
  );
}

const cities = [
  {
    value: "Semarang",
    label: "Semarang",
  },
  {
    value: "Jakarta",
    label: "Jakarta",
  },
  {
    value: "Depok",
    label: "Depok",
  },
  {
    value: "Bandung",
    label: "Bandung",
  },
  {
    value: "Cilacap",
    label: "Cilacap",
  },
  {
    value: "Pekalongan",
    label: "Pekalongan",
  },
  {
    value: "Yogyakarta",
    label: "Yogyakarta",
  },
  {
    value: "Solo",
    label: "Solo",
  },
  {
    value: "Surabaya",
    label: "Surabaya",
  },
  {
    value: "Klaten",
    label: "Klaten",
  },
  {
    value: "Cirebon",
    label: "Cirebon",
  },
];

const theme = createTheme();

export default function Message(props) {
  const [id, setId] = useState(sessionStorage.getItem("id"));
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [city, setCity] = useState(sessionStorage.getItem("city"));

  // const [id, setId] = useState(props.contactsState.contacts[0].id);
  // const [name, setName] = useState(props.contactsState.contacts[0].name);
  // const [city, setCity] = useState(props.contactsState.contacts[0].city);

  // const id = props.contactsState.contacts[0].id;
  // const name = props.contactsState.contacts[0].name;
  // const city = props.contactsState.contacts[0].city;

  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [msgNull, setMsgNull] = useState("Semua field harus diisi.");
  const [messageList, setMessageList] = useState([]);

  //   if (localStorage.getItem("address")) {
  //     setName(localStorage.getItem("name"));
  //     return 0;
  //   }

  // console.log(props.contactsState.contacts[0].id);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/messages/limit/5`).then((res) => {
      setMessageList(res.data);
    });
  }, [msg]);

  useEffect(() => {
    getDataM();
  }, []);

  const payload = {
    contactId: id,
    name: name,
    city: city,
    message: message,
  };

  const SendMessage = async (event) => {
    event.preventDefault();
    if (name || city || message === "") {
      setMsgNull("Semua field harus diisi.");
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages`, payload);
      setTimeout(function () {
        setMsg("");
      }, 3000);
      axios.get(`${process.env.REACT_APP_API_URL}/messages/limit/5`).then((res) => {
        setMessageList(res.data);
        setMsg(response.data.message);
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  function getDataM() {
    if (sessionStorage.getItem("name")) {
      setId(sessionStorage.getItem("id"));
      setName(sessionStorage.getItem("name"));
      setCity(sessionStorage.getItem("city"));
      return 0;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid onClick={getDataM} container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* <SnackBars /> */}
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={1} square>
          <Box
            component={Paper}
            elevation={1}
            sx={{
              my: 12,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
            }}
            sm={{
              my: 2,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <ChatOutlinedIcon />
            </Avatar>
            <Typography marginBottom="4" component="h1" variant="h5">
              Ucapan dari anda
            </Typography>

            {/* <ListMessage /> */}
            <ImageList cols={1} rowHeight={400}>
              <ImageListItem>
                <Stack
                  sx={{
                    my: 0,
                    mx: 0,
                    display: "flex",
                    flexDirection: "coloumn",
                    //   alignItems: "center",
                    padding: 1.5,
                    width: "100%",
                  }}
                  spacing={1}
                >
                  {messageList.map((c) => (
                    <Alert key={c.id} severity="success">
                      <AlertTitle>{c.message}</AlertTitle>
                      <strong>{c.name}</strong> - {c.city}
                    </Alert>
                  ))}
                </Stack>
              </ImageListItem>
            </ImageList>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={1} square>
          <Box
            component={Paper}
            elevation={1}
            sx={{
              my: 12,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
            sm={{
              my: 2,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <CreateOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Tinggalkan pesan untuk kami
            </Typography>

            {!message ? (
              <Alert margin="normal" severity="warning">
                {msgNull}
              </Alert>
            ) : (
              <Alert margin="normal" severity="success">
                {msg}
              </Alert>
            )}

            <Box component="form" noValidate onSubmit={SendMessage} sx={{ mt: 1 }}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nama Lengkap"
                name="name"
                autoComplete={"name"}
                // helperText="Masukkan Nama Lengkap"
              />
              <TextField
                id="filled-select-currency-native"
                size="small"
                fullWidth
                select
                label="Asal Kota"
                onChange={(event) => setCity(event.target.value)}
                value={city}
                // defaultValue={"a"}
                SelectProps={{
                  native: true,
                }}
                // helperText="Pilih asal kota"
                variant="filled"
              >
                {cities.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                size="small"
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="message"
                label="Pesan"
                type="text"
                id="message"
                autoComplete="message"
                // helperText="Gunakan emoji 🤲🏻🎉😊"
              />
              {message.length} / 255 | Gunakan emoji 🤲🏻🎉😊
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Kirim
              </Button>
              <Grid container></Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
