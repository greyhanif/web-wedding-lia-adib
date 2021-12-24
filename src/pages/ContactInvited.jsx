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
      <Divider />
      <Content />
      {/* <DividerBottom /> */}
      <DividerImage
        src={
          "https://lh3.googleusercontent.com/fife/AAWUweVLf_zAHsGZ1X_1_ooXs9z4FnK7KlYDHiIybt7gcON96q2Y6-21SxuKe3poJyM1IwIlQKfjKeruKXU1jREDGVgEOQ1m_wDIoG481ew7MsdzXDFcoDYiV7tLczi3Xb9dhlPdQiZnAjO3V6AL0fH8xOfhygmfPpqB3rJmVAx8ZsGq0QOL1jQowuBcG5HfsJ9W3ckTldIf91WUDi51FMkTsbVAYlGPBKIvF5X951jAyx_3YzVOXt4nTIQ5BftHnxWn645Ia_9AW3Q79dT7Nx3f1YH8w6LsyapNKmECzbReCNbAG4xXh0PZcYryRlcrombaOmM9IoSkiC4v3_glUE-97WEZwYs67xxMqRMpNnM9vwAyu3mtgwh5a4BuFV_FaHc1ibhOlJH9WuLBEOMUS46iqbg1dZfLae7Y2hmcwNo-0CwIlXdh_y8gg2vj9DE1XYyYdfPf54gc9Xt9ud1vGDvXuPZp__mWWw5eiY6WfxaH4qZAwuNNb2ZFfhavep-SEV9r0LXM1ncBoAVve0-KvUd6MjDhKUM4KhEd9EnWMhaB45lCdzmb9iq9pwG-O2vTqNHCcfxsSqBPN-oHhlJppbPJOJsumBDtOEciUMmegDIYqCAdfz0nE_IZ6M_YV8qRKYsuuEE2JsdvU2SF38G5MRP-Vo3fs8LnvHnKjofKV5sgDo1eBa51BN5Y73INKsVj2J_Ho3Z_JPV8pjZFPb0XrAcJWlsH0LBshFPdIw=w1022-h975-ft"
        }
        alt={"lia-adib"}
      />
      <DividerBottom />
      <BrideShow />
      <Divider />
      {/* <TimeLine /> */}
      <Countdown />
      <DividerBottom />
      <PlaceTime />
      {/* <DividerImage
        src={
          "https://lh3.googleusercontent.com/fife/AAWUweU_a7tA9KM_1Hdpk3KVcpEaNq1e7uuZFgXlMCWdkTrdkV73CnUiH8sfhW5D3zFqglJTYENay6gwjSISy2drzjEyBxwCG_G0p-Vs4VK_dFJX6bvJ4OYbNFBNIp1JFrYjk7o42Gvp511IElksX-mE47UC2rGBYOe5BnHsl1BlIkugGmFeaw0MMvnuvQIyKs35gT7VCwZh6X9GgaeH4gqjVQ-gc6II8fLTFaTMLsXr2bw6CMKMYQi3BpKTYolFXEQBxhWURvGouuT4iAB77JRWffLcvZ1Q7y5y8oiA9O0ubem-U2RkV9PeBy0WHbzsr48IGXu-de-rMNkw3w29E9w6tDZjRzmRTBKUKYTOQ9u-983L-AGICHJEoC78rsi-9h2WZ3KUb4ermA4l1rx555CpBVVpKKD2OX2S_8Tu4bObGnYyRWU9cUATH7EclsObAbwS42dj9FLjR9_QBW6SwKywYOucTU43qTj_B7flD1GCvgrLGilfJxneMUGlj4k0hpyPjNUV1wwDIwV0V3TIT3jm_hn_0haH6VjNX6FVlZE1jMZ8_XmJD2AiIR0G2pS9DpzpJEcTM8evxDbDV30-OBKfKDUxWD7OZdo_v92rlMuCEHs95MSUt41jG1wvCiA_Qr1rXnpfrgYH3zKByj7nLeMq1i-5od920dI8CHws_NP_a8PLYT-qEaxbIw0QT6C3ITfGGhZ-zWSWiWuWNXhw1bkxX7GKM4dk6eynXg=w1080-h1080-ft"
        }
        alt={"lia-adib"}
      /> */}
      {/* <Closing /> */}
      <Divider />
      <DividerImage
        src={
          "https://lh3.googleusercontent.com/fife/AAWUweXa4DpnDfD4CJNygBuFHaDImHL6H8DUCw4zyoo505kAV1Q2eu5ILSrQQwCeoVn8eiCaqplQRORMUMSAI7lUpKB47GTAGQ9O70dwzNdL4bQruArkcdr9ZnIym_i_ahtfIn4SEx9SHTfaSaO_TPU70Bowhmwr20u-pNf7WLVD8tEMIGL_Aqte7SpiBN4n_fQbXxNEVt8cVcWMvUdaPTOZvcdT11eTAQd37Bd-U5TEjh8dmQyh1Sv8mp3fCt-PEvkPklpPkRppw42xfB1NzTP1fNzYvJod24jUX5kezKqN1ZHQSsDV9VAGfZ_anQiFO26JkjwjyljeoHG2tDftjVk7_XE059xzql4Qq2DB3CHRmMB11rVF5Xr7hyllUr5jIJLH-MpQsAYYHPwR-Ex4ws8Vg3W-RYzBsHXu1S-IFLKwjCm4ZAWrsNq-pGtQMlzHsflGqE6qsiwmQUZZ7GiB8pz8Yhcp6w2ji62jAoP074_rKBlqIgF3cVB5Os4174GkeBWwmJm4gR-qJ_wPq9TcO4kCUQbXVu4Tw1qtKesiz7riYxGf1C8GtFhB4gPD_wy7P5Tkz4STzw5XElkrdn8Tkor6RecclgBw64UenZHxSRU5I1rrQrZ0JTMjDtJp5uRlF4bjJQ2E1ndzCw59zMVUiaSCKRyxsKb6L0omMNHl_HkzuY8FicUuPWfW0MV4pLlg4j0IgDNYYyloKDgmpTBB8yTzx0S6y2T9fDgrlQ=w1022-h975-ft"
        }
        alt={"lia-adib"}
      />
      <Prokes />
      <DividerBottom />
      {/* <Gallery /> */}
      <Jumbotron />
      <Divider />
      <TimeLine />
      <DividerBottom />
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
