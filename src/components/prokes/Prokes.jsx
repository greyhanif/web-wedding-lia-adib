import React from "react";
import "./prokes.css";
// import iconJagaJarak from "https://cdn-icons-png.flaticon.com/512/2885/2885297.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Prokes = () => {
  return (
    <div className="p-5 bg-prokes">
      <AnimationOnScroll className="mb-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className=" text-center">
          <h1 className="header-title-section">Protokol Kesehatan</h1>
          <div className="col-lg-6 mx-auto">
            <p className="header-desc-section">Untuk kenyamanan bersama kami harap mematuhi protokol kesehatan</p>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll className="row text-center mb-4" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className="col-6">
          <div className=" ">
            <div className="p-1">
              <img loading="lazy" src={"https://cdn-icons-png.flaticon.com/512/2885/2885297.png"} className=" icon-prokes-card p-3" alt="Handsanitizer" width="100" height="100"></img>
            </div>
            <div className="title-prokes">Jaga Jarak Aman</div>
          </div>
        </div>
        <div className="col-6">
          <div className="">
            <div className="p-1">
              <img loading="lazy" src={"https://cdn-icons-png.flaticon.com/512/2885/2885338.png"} className="icon-prokes-card p-3" alt="Handsanitizer" width="100" height="100"></img>
            </div>
            <div className="title-prokes">Menggunakan Masker</div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll className="row text-center" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className="col-6">
          <div className="">
            <div className="p-1">
              <img loading="lazy" src={"https://cdn-icons-png.flaticon.com/512/2885/2885180.png"} className=" icon-prokes-card p-3" alt="Handsanitizer" width="100" height="100"></img>
            </div>
            <div className="title-prokes">Mencuci Tangan Dengan Sabun</div>
          </div>
        </div>
        <div className="col-6">
          <div className="">
            <div className="p-1">
              <img loading="lazy" src={"https://cdn-icons-png.flaticon.com/512/2885/2885191.png"} className=" icon-prokes-card p-3" alt="Handsanitizer" width="100" height="100"></img>
            </div>
            <div className=" title-prokes">Menggunakan Handsanitizer</div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Prokes;
