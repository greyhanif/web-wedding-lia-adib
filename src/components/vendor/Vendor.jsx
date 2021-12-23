import React from "react";
import "./vendor.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Vendor = () => {
  return (
    <div className="p-4 bg-vendor">
      <AnimationOnScroll className="mb-5" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div className=" text-center">
          <h1 className="header-title-section">Vendor</h1>
          <div className="col-lg-6 mx-auto">
            <p className="header-desc-section">Beberapa vendor yang membantu menyukseskan acara</p>
          </div>
        </div>
      </AnimationOnScroll>

      <div className="text-center mb-4">
        <AnimationOnScroll className="row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor " src={"https://dev.ibisnis.com/images/thumbnails/5d9bf02cbb1d4.webp"} alt="Logo Patra Semarang" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Patra Semarang</h4>
              <p className="vendor-desc">Venue</p>
            </div>
          </div>

          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://lh3.googleusercontent.com/a-/AOh14GjJI3DTYnf9vUlPn51S-7_b8_p-4J8RkmREXTFq=s512-p-k-rw-no"} alt="Prahasta Organizer" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Prahasta Organizer</h4>
              <p className="vendor-desc">Wedding Organizer</p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className="row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://lh3.googleusercontent.com/a-/AOh14GjJI3DTYnf9vUlPn51S-7_b8_p-4J8RkmREXTFq=s512-p-k-rw-no"} alt="Maudy Makeup" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Maudy Makeup</h4>
              <p className="vendor-desc">MUA & Wardrobe</p>
            </div>
          </div>
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://yt3.ggpht.com/ytc/AKedOLSq6Ot_jSWertLkhsmhjC03VVUo2fRPeS6RtnBz=s512-c-k-c0x00ffffff-no-rj"} alt="Pentakustik" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Pentakustik</h4>
              <p className="vendor-desc">Hiburan</p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className="row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0 " src={"https://yt3.ggpht.com/ytc/AKedOLSq6Ot_jSWertLkhsmhjC03VVUo2fRPeS6RtnBz=s512-c-k-c0x00ffffff-no-rj"} alt="Hanny Dekor" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Hanny Dekorasi</h4>
              <p className="vendor-desc">Dekorasi ruangan</p>
            </div>
          </div>
          <div className="col-6 mb-4">
            <img
              className="img-thumbnail icon-vendor flex-shrink-0"
              src={
                "https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/15304082_1292633737477339_1115125244762602049_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGQmA5eK6dssNRdR52WUEzeryWvCvUZ5QuvJa8K9RnlC-lo3cz7G7tcIDdxwVXIylfgVRPZiFWA-cJfTWFlw_Nl&_nc_ohc=bRhf2Ondn3UAX-qMEUq&_nc_ht=scontent-sin6-2.xx&oh=00_AT8qaTz8TgaRWjT0ZQaSvwV4x-rnS9dlxs6HxzahcueWSQ&oe=61DDC001"
              }
              alt="Sonokembang"
              width="100"
              height="100"
            />
            <div>
              <h4 className="vendor-title">Sonokembang</h4>
              <p className="vendor-desc">Catering</p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className="row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0 " src={"https://lh3.googleusercontent.com/a-/AOh14Gh-nJtfR-zX57xSF3utoqXa4NtIf-EDw1ymHxuhZg=s512-p-k-rw-no"} alt="Tiera" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Tiera</h4>
              <p className="vendor-desc">Dokumentasi acara</p>
            </div>
          </div>
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://www.static-src.com/wcsstore/Indraprastha/images/brandlogo//BRD-38049/peeko-selfiebox-logo.jpg"} alt="Peeko Selfiebox" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Peeko Selfiebox</h4>
              <p className="vendor-desc">Foto selfie instan</p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll className="row" animateIn="animate__zoomIn" animateOut="animate__zoomOut">
          <div className="col-6 mb-4">
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://womeninstandards.org/wp-content/uploads/2020/03/WiS-Logo-V2.png"} alt="Wis" width="100" height="100" />
            <div>
              <h4 className="vendor-title">Wis</h4>
              <p className="vendor-desc">Sistem Informasi Pernikahan</p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      {/* <div className="row text-center mb-4">
        <div className="col-6 mb-4">
          <div>
            <img className="img-thumbnail icon-vendor flex-shrink-0" src={"https://womeninstandards.org/wp-content/uploads/2020/03/WiS-Logo-V2.png"} alt="Jaga Jarak" />
            <div>
              <h4 className="vendor-title">Wis</h4>
              <p className="vendor-desc">Penyedia sistem undangan elektronik</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Vendor;
