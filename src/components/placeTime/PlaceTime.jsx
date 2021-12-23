import React from "react";
import "./placeTime.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const PlaceTime = () => {
  const handleOpenMaps = () => {
    // navigate(`https://goo.gl/maps/C9LyEqk7ou3fnDfo9`);
    window.open("https://goo.gl/maps/C9LyEqk7ou3fnDfo9");
  };
  return (
    <div id="section-tanggal-lokasi" className="p-4 bg-place-time">
      <div className="wrapper-place-time p-4 mt-5">
        <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__zoomOut">
          <div className="px-4 py-2 my-4 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
            <h1 className="header-title-section-dark mt-4">Waktu & Tempat</h1>
            <div className="col-lg-6 mx-auto">{/* <p className="lead mb-4">Please leave your wishes for us</p> */}</div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="row d-flex justify-content-evenly text-center mb-5">
            <div className="col-6 p-3">
              <div className="box-rounded">
                <div className="card-header title-calendar bold">Akad</div>
                <div className="card-body p-3">
                  <p className="detail-place-time-day">Sabtu</p>
                  <h5 className="date-value">22 Jan</h5>
                  <p className="detail-place-time">08.00 - 10.00 WIB</p>
                </div>
              </div>
            </div>

            <div className="col-6 p-3">
              <div className="box-rounded">
                <div className="card-header title-calendar bold">Resepsi</div>
                <div className="card-body p-3">
                  <p className="detail-place-time-day">Sabtu</p>
                  <h5 className="date-value">22 Jan</h5>
                  <p className="detail-place-time">11.00 - 13.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-12 ">
            <div className="text-center box-rounded mb-5">
              <div className="card-header title-calendar bold">Lokasi</div>
              <div className="card-body p-3">
                <h6 className="title-calendar">Hotel Patra Semarang & Convention</h6>
                <h5 className="place-detail">Rama Shinta Ballroom</h5>
                <p className="title-calendar">Wonotingal, Candisari, Kota Semarang, Jawa Tengah, 50252</p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        {/* <div className="gmap-rounded"> */}
        <AnimationOnScroll className="gmap-rounded ratio ratio-1x1" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          {/* <div > */}
          <iframe
            className="gmap-rounded"
            title="Maps Rama Shinta Ballroom"
            width="350"
            height="350"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=rama%20shinta%20ballroom&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
          {/* </div> */}
        </AnimationOnScroll>
        {/* </div> */}

        <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="text-center">
            {/* <button className="btn bg-button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map me-2" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
            />
          </svg>
          Cari lokasi
        </button> */}
            {/* <Button onClick={handleOpenMaps} variant="inherit" startIcon={<MapIcon />} disableElevation>
          Buka di Google Maps
        </Button> */}
            <button onClick={handleOpenMaps} type="submit" className="button-global-primary-75 mb-5 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-map-fill me-2" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
                />
              </svg>
              Buka di Google Maps
            </button>
          </div>
        </AnimationOnScroll>
        {/* --- */}
        <div className="col-lg-6 mx-auto text-center p-1">
          <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
            <p className="mb-4 ucapan-closing">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kedua mempelai.</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
            <p className="mb-4 ucapan-closing">Hormat kami yang berbahagia</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <div className="row d-flex justify-content-evenly  mb-5">
              <div className="col-6 ">
                <p className="ucapan-closing bold">Kel. Bapak Usman Muchtarom & Ibu Tutik Rohmaningsih</p>
              </div>
              <div className="col-6 ">
                <p className="p-1 ucapan-closing bold">Kel. Bapak Arifin & Ibu Sri Winarni</p>
              </div>
              <AnimationOnScroll className="" animateIn="animate__flipInX" animateOut="animate__flipOutX">
                <p className=" ucapan-closing bold">beserta kedua mempelai,</p>
                <p className=" bride-name">Lia & Adib</p>
              </AnimationOnScroll>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default PlaceTime;
