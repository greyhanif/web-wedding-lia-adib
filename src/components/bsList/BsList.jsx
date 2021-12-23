import React from "react";
import { useEffect, useState } from "react";
import "./bsList.css";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
// import "../../utils/moment-with-locales.js";
import Kota from "../../store/cities.json";
import { Autocomplete, TextField } from "@mui/material";

const BsList = () => {
  const cities = Kota;
  // const cities = [
  //   {
  //     value: "Semarang",
  //     label: "Semarang",
  //   },
  //   {
  //     value: "Jakarta",
  //     label: "Jakarta",
  //   },
  //   {
  //     value: "Depok",
  //     label: "Depok",
  //   },
  //   {
  //     value: "Bandung",
  //     label: "Bandung",
  //   },
  //   {
  //     value: "Cilacap",
  //     label: "Cilacap",
  //   },
  //   {
  //     value: "Pekalongan",
  //     label: "Pekalongan",
  //   },
  //   {
  //     value: "Yogyakarta",
  //     label: "Yogyakarta",
  //   },
  //   {
  //     value: "Solo",
  //     label: "Solo",
  //   },
  //   {
  //     value: "Surabaya",
  //     label: "Surabaya",
  //   },
  //   {
  //     value: "Klaten",
  //     label: "Klaten",
  //   },
  //   {
  //     value: "Cirebon",
  //     label: "Cirebon",
  //   },
  // ];

  const [loading, setLoading] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [msg, setMsg] = useState([]);
  const [msgNull, setMsgNull] = useState([]);
  const [idState, setIdState] = useState(sessionStorage.getItem("id"));
  const [nameState, setNameState] = useState(sessionStorage.getItem("name"));
  const [cityState, setCityState] = useState({
    name: "Nama Kota",
  });
  const [messageState, setMessageState] = useState("");
  const [confirmState, setConfirmState] = useState("yes");
  // console.log(name);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchDataMessages();
    return function cleanup(mounted) {
      mounted = false;
    };
  }, []);

  const fetchDataMessages = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/messages/`).then((res) => {
      setLoading(false);
      setMessageList(res.data);
    });
  };

  useEffect(async () => {
    let mounted = true;
    // sendMessage();
    makeid();
    getDataM();
    alertMsg();
    return function cleanup() {
      mounted = false;
    };
  }, []);

  function getDataM() {
    if (sessionStorage.getItem("name")) {
      setIdState(sessionStorage.getItem("id") ? sessionStorage.getItem("id") : "Mendapatkan Data . . .");
      setNameState(sessionStorage.getItem("name") ? sessionStorage.getItem("name") : "Mendapatkan Data . . .");
      setCityState(sessionStorage.getItem("city") ? sessionStorage.getItem("city") : "Mendapatkan Data . . .");
      return 0;
    }
  }
  const sendMessage = async (event) => {
    // event.preventDefault();

    const payload = {
      contactId: idState,
      name: nameState,
      city: cityState,
      message: messageState,
      willBePresent: confirmState,
    };
    console.log(payload);
    if (nameState || cityState || messageState === "") {
      setMsgNull("Semua field harus diisi.");
    }
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages`, payload);
      setTimeout(function () {
        setMsg("");
      }, 3000);
      axios.get(`${process.env.REACT_APP_API_URL}/messages`).then((res) => {
        setMessageList(res.data);
        setMsg(response.data.message);
        alertMsg();
        setMessageState("");
        setCityState("");
        setLoading(false);
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  function alertMsg() {
    if (messageState !== "") {
      alert(`Berhasil menambahkan pesan dari ${nameState} asal ${cityState} dengan isi pesan "${messageState}". ${messageState.length} karakter`);
    }
  }

  function makeid(length) {
    var result = "";
    var characters = "123456789A";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const formatConfirm = (valConfirm) => {
    let confirm = { value: "Akan Hadir", color: "text-success" };
    if (valConfirm === "yes") {
      confirm = { value: "Akan Hadir", color: "text-success" };
    } else if (valConfirm === "maybe") {
      confirm = { value: "Mungkin Hadir", color: "text-warning" };
    } else {
      confirm = { value: "Tidak Bisa Hadir", color: "text-danger" };
    }
    return confirm;
  };

  return (
    <div className="p-3 bg-section-chat">
      <div className="px-4 text-center mt-4">
        <h1 className="header-title-section-dark mb-5">Do'a dari anda</h1>
        <div className="col-lg-6 mx-auto">{/* <p className="header-desc-section-dark">Please leave your wishes for us</p> */}</div>
      </div>

      <div className="list-group scrollarea p-2 bg-chat">
        {messageList.length === 0 && <p className="text-light ">Memutakhirkan pesan . . .</p>}
        {messageList.map((c) => (
          <div key={c.id} href="#" className=" like-chat mb-2">
            <div className="d-flex w-100 justify-content-between ">
              <p className="contact-name" style={{ color: `#${makeid(3)}` }}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="mt-1 bi-person-circle me-1" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg> */}
                + {c.name}
              </p>
              <p className={`legend-chat ${formatConfirm(c.willBePresent).color}`}>{formatConfirm(c.willBePresent).value}</p>
            </div>
            <p className="text-chat">{c.message}</p>
            <div className="d-flex w-100 justify-content-between">
              <p className="legend-chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi-geo me-1" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                  />
                </svg>
                {c.city}
              </p>
              <p className="legend-chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                {c.createdAt === c.updatedAt ? `Dibuat ${moment(c.createdAt, "YYYY-MM-DD HH:mm:ss.SSS Z").fromNow()}` : `Diubah ${moment(c.updatedAt, "YYYY-MM-DD HH:mm:ss.SSS Z").fromNow()}`}
                {/* {moment(c.createdAt, "YYYY-MM-DD HH:mm:ss.SSS Z").format("LLL")} */}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div id="section-pesan-doa" className="p-2">
        <p className="counter-messages">{messageList.length} Records</p>
      </div>

      <div className="px-4 mt-4 text-center">
        <h1 className="header-title-section-dark">Tulis Pesan Untuk Kami</h1>
        <div className="col-lg-6 mx-auto">
          {/* <p className="header-desc-section-dark">Please leave your wishes for us</p> */}
          {msg ? <p className="header-desc-section-dark">{msg}</p> : <p className="header-desc-section-dark">Semua field harus diisi</p>}
        </div>
      </div>

      <div onClick={getDataM} className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Nama Lengkap</label>
            </div>
            <div className="col-75">
              <input value={nameState} onChange={(event) => setNameState(event.target.value)} className="input-name" type="name" id="fname" name="firstname" placeholder="Your name. . ."></input>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Kabupaten / Kota</label>
            </div>
            <div className="">
              {/* <select id="country" name="country" onChange={(event) => setCityState(event.target.value)} value={cityState}>
                {cities.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select> */}
              {/* <input class="form-control" list="datalistOptions" onChange={(event) => setCityState(event.target.value)} value={cityState}></input>
              <datalist id="datalistOptions">
                {cities.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </datalist> */}

              <Autocomplete
                className="input-name"
                disablePortal
                className={"autocomplete"}
                id="combo-box-demo"
                options={cities}
                isOptionEqualToValue={(option) => option.name}
                getOptionLabel={(option) => option.name}
                defaultValue={cityState}
                onChange={(event, newValue) => {
                  newValue && setCityState(newValue.name);
                }}
                renderInput={(params) => <TextField {...params} variant="standard" />}
              />
            </div>
            {/* {console.log(cityState)} */}
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Pesan & Do'a</label>
            </div>
            <div className="col-75">
              <textarea value={messageState} onChange={(event) => setMessageState(event.target.value)} id="subject" name="subject" placeholder="*ex: SaMaWa 🤲🏻🎉😊 . . ."></textarea>
            </div>
            <div className="col-25">
              {loading ? (
                <p className="counter-word" htmlFor="subject">
                  Mengirim Pesan . . .
                </p>
              ) : (
                <p className="counter-word" htmlFor="subject">
                  {messageState.length} / 255
                </p>
              )}
            </div>
          </div>
          {/* <p className="header-desc-section-dark">Konfirmasi kehadiran:</p> */}
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Konfirmasi Kehadiran</label>
            </div>
            <div className="col-75">
              <select id="country" name="country" onChange={(event) => setConfirmState(event.target.value)} value={confirmState}>
                <option value="yes">Hadir</option>
                <option value="maybe">Mungkin</option>
                <option value="no">Tidak</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="">
              <button onClick={(event) => sendMessage(event.preventDefault())} type="submit" className="button-global-primary mt-4">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BsList;
