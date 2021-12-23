import React, { useEffect } from "react";
import { Content } from "../components/content/Content";
import BrideShow from "../components/brideShow/BrideShow";
import Divider from "../components/divider/Divider";
import TimeLine from "../components/timeline/TimeLine";
import PlaceTime from "../components/placeTime/PlaceTime";
import Jumbotron from "../components/jumbotron/Jumbotron";
import BsList from "../components/bsList/BsList";
import Prokes from "../components/prokes/Prokes";
import Vendor from "../components/vendor/Vendor";
import DividerBottom from "../components/divider/DividerBottom";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/bottomNav/BottomNav";
import axios from "axios";
import BasicModal from "../components/modal/Modal";
import MusicPlayer from "../components/music/MusicPlayer";
import DividerImage from "../components/divider/DividerImage";
import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";
import Closing from "../components/closing/Closing";
import Countdown from "../components/countdown/Countdown";

const Visitor = () => {
  useEffect(() => {
    let mounted = true;
    axios.get(`${process.env.REACT_APP_API_URL}/`).then((res) => {
      console.log(res);
    });

    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <div>
      {/* <Intro /> */}
      {/* <AppNav /> */}
      <BasicModal />
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
      {/* <DividerBottom /> */}
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
};
export default Visitor;
