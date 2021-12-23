import React from "react";
import "./closing.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Closing = () => {
  return (
    <div className="bg-closing p-4">
      <div className="px-2 py-2 my-4 text-center">
        <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
          {/* <h1 className="display-5 mb-3 bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1> */}
        </AnimationOnScroll>
        <div className="col-lg-6 mx-auto">
          <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
            <p className="mb-4 ucapan-closing">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kedua mempelai.</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
            <p className="mb-4 ucapan-closing">Hormat kami yang berbahagia</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <div className="row d-flex justify-content-evenly  mb-5">
              <div className="col-6 p-1 ">
                <p className="ucapan-closing bold">Kel. Bapak Usman Muchtarom & Ibu Tutik Rohmaningsih</p>
              </div>
              <div className="col-6 ">
                <p className="p-1 ucapan-closing bold">Kel. Bapak Arifin & Ibu Sri Winarni</p>
              </div>
              <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
                <p className=" ucapan-closing bold">beserta kedua mempelai, Lia & Adib</p>
              </AnimationOnScroll>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Closing;
