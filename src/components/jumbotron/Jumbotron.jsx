import "./jumbotron.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { red } from "@mui/material/colors";

const Jumbotron = () => {
  const [galleryState, setGalleryState] = useState([]);

  useEffect(() => {
    fetchDataGallery();
  }, []);

  useEffect(() => {
    Slider();
  }, [galleryState]);

  const fetchDataGallery = async () => {
    // const response = await axios.get(`${process.env.REACT_APP_API_URL}/gallery`);
    const response = await axios.get(`https://api.liaadib-weddingday.id/gallery`);
    setGalleryState(response.data);

    console.log(response.data);
  };
  console.log(galleryState);

  const Slider = () => {
    if (galleryState.length === 0) {
      return <p className="text-white container text-end">Memutakhirkan Data Galeri . . .</p>;
    } else {
      return (
        <Carousel style={{ backgroundColor: "#6b0f10" }} hasLeftButton={false} hasRightButton={false} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} isAutoPlaying={true} autoPlayInterval={2500} images={galleryState} />
      );
    }
  };

  return (
    <div className="bg-section-gallery" id="section-jumbotron">
      <AnimationOnScroll className="p-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className="px-4 text-center mt-4">
          <h1 className="header-title-section-dark">Galeri</h1>
          <div className="col-lg-6 mx-auto">
            <p className="header-desc-section-dark">Momen kebersamaan</p>
          </div>
        </div>
      </AnimationOnScroll>
      {galleryState && (
        <AnimationOnScroll className="" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <Slider />
        </AnimationOnScroll>
      )}
    </div>
  );
};

export default Jumbotron;
