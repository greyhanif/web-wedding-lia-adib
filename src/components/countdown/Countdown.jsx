import React from "react";
import { useState, useEffect } from "react";
import "./countdown.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Countdown = () => {
  const [countdownState, setCountdownState] = useState({});
  // Set the date we're counting down to
  let countDownDate = new Date("Jan 22, 2022 10:00:00").getTime();

  // Update the count down every 1 second
  function countdownFunction() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let payload = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    setCountdownState(payload);
  }

  let timerCount = null;

  useEffect(() => {
    let mounted = true;
    timerCount = setInterval(() => {
      countdownFunction();
    }, 1000);
    // return () => {

    // };

    return function cleanup() {
      clearInterval(timerCount);
      mounted = false;
    };
  }, [countdownState]);

  return (
    <div className="d-flex justify-content-around text-center p-5 bg-countdown ">
      {/* <AnimationOnScroll className="col-3 py-2 px-1 text-center" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <h1 className="header-title-section">Waktu Menuju Acara</h1>
        <div className="col-lg-6 mx-auto"><p className="header-desc-section">Untuk kenyamanan bersama kami harap mematuhi protokol kesehatan</p></div>
      </AnimationOnScroll> */}
      <AnimationOnScroll className="mb-3 row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className=" text-center">
          <h1 className="header-title-section fs-5">Waktu Menuju Acara</h1>
          {/* <div className="col-lg-6 mx-auto"><p className="header-desc-section">Untuk kenyamanan bersama kami harap mematuhi protokol kesehatan</p></div> */}
        </div>

        <div className="col-3 py-2 px-3">
          <div className=" box-countdown">
            <div className="card-body p-2">
              <h5 className="display-6 value-count  mt-1">{countdownState.days}</h5>
              <p className="legend">Hari</p>
            </div>
          </div>
        </div>
        <div className="col-3 py-2 px-3">
          <div className="box-countdown">
            <div className="card-body p-2">
              <h5 className="display-6 value-count  mt-1">{countdownState.hours}</h5>
              <p className="legend">Jam</p>
            </div>
          </div>
        </div>
        <div className="col-3 py-2 px-3">
          <div className="box-countdown">
            <div className="card-body p-2">
              <h5 className="display-6 value-count  mt-1">{countdownState.minutes}</h5>
              <p className="legend">Menit</p>
            </div>
          </div>
        </div>
        <div className="col-3 py-2 px-3">
          <div className="box-countdown">
            <div className="card-body p-2">
              <h5 className="display-6 value-count mt-1">{countdownState.seconds}</h5>
              <p className="legend">Detik</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Countdown;
