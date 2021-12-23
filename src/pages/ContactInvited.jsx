import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../components/modal/Modal";
import UserNav from "../components/userNav/UserNav";
import Divider from "../components/divider/Divider";
import { Content } from "../components/content/Content";
import BrideShow from "../components/brideShow/BrideShow";
import TimeLine from "../components/timeline/TimeLine";
import PlaceTime from "../components/placeTime/PlaceTime";
import Prokes from "../components/prokes/Prokes";
import Vendor from "../components/vendor/Vendor";
import BsList from "../components/bsList/BsList";
import Jumbotron from "../components/jumbotron/Jumbotron";
import DividerBottom from "../components/divider/DividerBottom";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/bottomNav/BottomNav";
import MusicPlayer from "../components/music/MusicPlayer";
import BasicModal from "../components/modal/Modal";
import Hero from "../components/hero/Hero";
import DividerImage from "../components/divider/DividerImage";
import Countdown from "../components/countdown/Countdown";
import Closing from "../components/closing/Closing";

export default function ContactInvited() {
  let navigate = useNavigate();

  let { slug } = useParams();
  const endPoint = `${process.env.REACT_APP_API_URL}/apps/` + slug;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");
  const [ticketCode, setTicketCode] = useState("");

  const getContact = useEffect(() => {
    let mounted = true;
    axios.get(endPoint).then((res) => {
      console.log(res);
      if (res.data.msg === "no data available") {
        return navigate("/");
      } else {
        setId(res.data.contacts[0].id);
        setName(res.data.contacts[0].name);
        setAddress(res.data.contacts[0].address);
        setCity(res.data.contacts[0].city);
        setTicketCode(res.data.tickets[0].ticketCode);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);
  sessionStorage.setItem("id", id);
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("ticketCode", ticketCode);

  return (
    <div>
      <BasicModal />
      <UserNav />
      <Hero />
      <Divider />
      <Content />
      <DividerBottom />
      <DividerImage
        src={
          "https://lh3.googleusercontent.com/fife/AAWUweWmeZtIR_cDpHB2hv7w2dGManGpoCKdRWkQVfzF-1KTYgPuZB1GP2nLJkLXR_lK7hovPxNP30qHQCkNbqflYZgHxYyoW2z1kSTstTnjMLS68JjF2ALkcG-VDYMXKybDrPl1j2_lvsT0heq8Ho1aJMO43aIWugdyl-u52zom779wyx8ToYSO182opeedIxlN25M2ILB6quG0_S4rJf33glM-JqbIfsw0-ngsqrdXT_XjPbPUV8sgD6MO21P85jx_k1240Q26C0ShZXr8MixFt_6nwPTa0HIm8QpgCmVe2KAqr_ClQ97ViGgUZ-bBVpYRK_o_26TTzOpaKSLdD1mWIlZrsC6ll5Jo1x7ohZWf4k8YfW7FUE7tObv0kmCz0BnMA9vac39f0MED-unoEjoDweYL0jHwL73F64gLQtfmpXo9hmOriVdxiu0KTCVXXGw81fV1mc6XXy3MBDEODk0RGGjvucjDcqHgyIQkVMo5a43jfKlPk6iI3PsjGz94eaGaBvXxsiMb13PgQnmq24LBVvV9rzjXFAG886U-dpeK8RzT6fABBonoa-sbnFeoV_08YkEvVXLK-AqFQdLCxcDBloYFL9rL-AUJ2dtcbHaTMIw16SHBhwWJWjE8ZnKGDdCFpk6fP0EYAVCH4g8kZTAFcJ71gVupoZIg4W8natkLUsywVua3qYS_8SW1Urx-6dtj0O4-CcqtwM8JFHScYAHTUyxEyDiwfFLMIA=w1080-h1080-ft"
        }
        alt={"lia-adib"}
      />

      <BrideShow />
      <Divider />

      <Countdown />
      <DividerBottom />
      <PlaceTime />

      <Divider />
      <Prokes />
      <DividerBottom />

      <Jumbotron />
      <BsList />
      <Divider />
      <Vendor />
      <DividerBottom />
      <Footer />
      <MusicPlayer />
      <BottomNav />
    </div>
  );
}
