import React from "react";
import "./hero.css";
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <div className="" id="section-hero">
      <img
        className="img-fluid "
        src={
          "https://lh3.googleusercontent.com/fife/AAWUweVsoEqU5dn6ERVF5864vprv_uvBgBuvTlajfZwoJVSl4jTk7nn6GZx4aVc0M1_SZGnECzmdc3vbidAcalgBbr9_fOZntQq8N3AoxMKQr3w2XV5_CDUr1Q3am_9mxb0wCoQyZyrvcCU3jaUJNnaSX2iE-JoiO3xdybHvI7kd3de5yWOMP-MixzlbQ1NGgrOYIg1div-SgB4huYgfpiwdzkqyMmS_N7F9_woJrJKH3FjCaycWqHDMuuJaZe1ooW2OahYl7VfvFUBFBZWTlre9lUeaW6hxCiWM6AkUOy4LrFhW7Bvu8W-YEROrsB1GEe_O2WQktiKgIGKuY0vNMhchLjGdpbOooiN9UN0okT9orXktqhJkAkJk2TZap_iVOCz2ih6JP-F2Tx4cmdgE-9UAi7mfU8vTTfU63xfrt3eEAEVLNAdOZsVPFxK_bdPWu_t8AMTV59VCC1ghzjnIcMWq5-6j17ZYQ--aPaSafgM06JFTIMI2eorsvmKzRAcTHHoSFdLxSzJ54xDog3EzfN4PYcm-hq1WKf3kcpObSgJJbDcKySplSFabvjd6v0YDN9hLzkOK-UG6qysu-rIUjebY0d0Z6A0nDyM-6IkvJuUiz0YtwkrnUfbLyU6PidPE9mKwbnF5sAqsiXf0kH_F_CJwUKn3oPntwDaaHGWU7qT0UYOhoobvaoxCiYeitlvQwmnH_xZt9iD7SotXiib2VaezWEvr3A3b8fcFjA=w2000-h2000-ft"
        }
      />
      <div className=" carousel-caption wrapper-content-hero  animate__animated animate__zoomIn">
        {/* <h1 className="the-wedding-of">We are getting married</h1> */}
        <h1 className="name-hero">We are</h1>
        <h1 className="name-hero">getting married</h1>
        {/* <h2 className="date-header-top">22, 2022</h2> */}
      </div>
    </div>
  );
};

export default Hero;
