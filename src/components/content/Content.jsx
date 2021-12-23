import React from "react";
import "./content.css";
// import Animate from "animate.css-react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Content = () => {
  return (
    <div className="bg-content">
      <div className="p-4">
        <figure className="text-center ">
          <blockquote className="blockquote mb-4 ">
            <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
              <p className="fs-4 quran">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp">
              <p className=" quran mt-4">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa cinta dan kasih sayang.
                Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berfikir."
              </p>
            </AnimationOnScroll>
          </blockquote>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <figcaption className="blockquote-footer quran">( QS Ar Rum: 21 )</figcaption>
          </AnimationOnScroll>
        </figure>
      </div>
    </div>
  );
};
