import React from "react";
import "./brideShow.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BrideShow = () => {
  const handleOpenIgAprilia = () => {
    window.open("https://www.instagram.com/apriliarahma21/");
  };
  const handleOpenIgAdibIrfan = () => {
    window.open("https://www.instagram.com/adibirfan24/");
  };
  return (
    <div id="section-pengantin" className="bg-bride-show p-4">
      <div className="wrapper-bride-show mt-5">
        <div className="px-2 py-2 my-4 text-center">
          <AnimationOnScroll className="mt-4" animateIn="animate__flipInX" animateOut="animate__flipOutX">
            <h1 className="display-5 mb-3 bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1>
          </AnimationOnScroll>
          <div className="col-lg-6 mx-auto">
            <AnimationOnScroll className="p-3" animateIn="animate__flipInX" animateOut="animate__flipOutX">
              <p className="mb-4 ucapan">Maha suci Allah SWT, semoga kita selalu dalam lindunganNya. Dengan ini kami mengharapkan kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan putra - putri kami</p>
            </AnimationOnScroll>
          </div>
        </div>

        <div className="row text-center">
          <AnimationOnScroll className="col-lg-5 mb-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <img
              width="140"
              height="140"
              className="mb-4  rounded-circle"
              loading="lazy"
              src={
                "https://lh3.googleusercontent.com/fife/AAWUweUFon7JxucWqvTaxj1l2fhj1x_VEXL8cOqLvi-5jyd6bE5HC3xPvdDZ1yDuWSNwf_J37bgbyxWV_Tby8CL08TCLsQnr2CkQXNxAaBde_pOoVbV_1NSpfywQKZSUZiezXZTaknLF3Sw_nD5Ltw7i39px1yITEgi1_EsMye_7CJSLhDR8308oOi8LNfx7Nn-eV2E6qQqvKMZrY_Cd-WLsJ6t7IkGC2277U0nTbp258N71vdquVFTrbKI9lPIlmZEuxr514RWwsGcXhYd8a27g2JnyuJwVvcijimzTG0Nwmspxi6llMhnHx5cMFspwIrZy19mj9FGvxjFg4-ojM2GknhUfAOywJBJRFtXasHUaOR8ZfyQCfOVlb-VeRk69wQ4fP-AMG7RX0cFc2NJIjZ9nFmAKjawY1SzstjS9clZJNRjhQrwtRqHWZrtc8GdEpJpRHQ3sZFBquxy4_q4lAHWqGH-qtNsBtjSLIqYCMI-n9PwQXUM9uUhScKCZhMKeBY6JiWomF878WJuPz0AJ3pOJKfRQKOcAKVUa8mp9eeAr4Hi5eNx8aZiR9XkEw-3zDOJpigZcaNtNl7H94Q-xg3lYYwtAo-BiOmv5S3vPBmyPBXdPUCQLWRZb9-FQ-C1Tx6Fbq4xlzA6KWLyNT_Hb0yaCdO9mCbOWpTXX053M0XFRzbabKXGCH6JeBZSK4xMqAgmAxbugvvmV_b1cFw2vFMqVXVGEmI3s9WjrOA=w2000-h3550-ft"
              }
              alt="Aprilia Rahma Kusumastuti"
            />

            <h3 className="bride-name">Aprilia Rahma Kusumastuti</h3>

            <p className="lh-sm detail">Putri dari Bapak Usman Muchtarom & Ibu Tutik Rohmaningsih</p>

            <div className="">
              <button onClick={handleOpenIgAprilia} className="button-global-primary-50">
                @apriliarahma21
              </button>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll className="col-lg-2 mb-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <h2 className="bride-name">- & -</h2>
          </AnimationOnScroll>
          <AnimationOnScroll className="col-lg-5 mb-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <img
              width="140"
              height="140"
              className="mb-4  rounded-circle"
              loading="lazy"
              src={
                "https://lh3.googleusercontent.com/fife/AAWUweVOFJaJk4mQpqblOkxDJfqb6ksL5lXpgfIeW8YFngBUqGQr28O_A8_yHax8bk60h4zBYGpW1xBjKVrSvQhkyCoye4910gaH_JHTv-9-omP0nCNdSKMSV0nh54l-Iu6f2unZpPTS_mXDXb2YT5JhfthUeGDIKX2fDH4tdaxpIUnCLijsMFQmzj9-ayZ_0ufKrbCx5FFaRGUSQREuImZr0hZ17vte7llkcZAKEAPcLUZWHEh0cNmC8y7Ig7pRTn4ilagGGa-mw0IvLL494JD24AsckMoQlGKmmRHFVhl4qYnqJ8je-EsoH6CXBK7qJMPJz-uAWNeFdmc8ma7dQpLQkqhPJY5yci-9HzfNEr4AnfhmsdVjOjayBgIcfUNkyhZLeL1W9dZbinYqKLk8V_csf0zpyF_xHkw-9KAwDedTjCCM2bP88scyI5VT7iTxBViE-4KzYPbiVSMEQ_vGZSIjpoXJTze3VJtNFS88TuadYOghqx1rqt-BMHOeIzSGnQUn5Ip0RMtFnYmc9N_zQboDtzzNkbuXNaja_8nsEX5Hu26dsEr3lEzMlOV4got4y9WcXNUMPcz5IXW9lid8TZ4QAR2qNTSMZ59EQ2FkzVBLpThvK7VmneIDO-7sciJiwQN6xBpX0hhJWtJgEkKKEwLYTHT3LbFwuNRzv1NgHipWB78j3VPzeXtONih1pTs8Z1io6VDDWHzjDPqR6CR6OFDF31iV3vx_B9Vc0g=w2000-h3550-ft"
              }
              alt="Adib Irfan Adilah"
            />

            <h3 className="bride-name">Adib Irfan Adilah</h3>

            <p className="lh-sm detail">Putra dari Bapak Arifin & Ibu Sri Winarni</p>

            <div className="">
              <button onClick={handleOpenIgAdibIrfan} className="button-global-primary-50">
                @adibirfan24
              </button>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default BrideShow;
