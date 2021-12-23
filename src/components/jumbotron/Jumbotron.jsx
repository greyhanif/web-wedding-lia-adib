import "./jumbotron.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Jumbotron = () => {
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
      {/* <Toolbar /> */}
      {/* <AnimationOnScroll animateIn="animate__zoomIn" animateOut="animate__zoomOut"> */}
      {/* <div className="overlay-header carousel-caption">
        <h1 className="the-wedding-of">The Wedding Of</h1>
        <h1 className="lia-adib">Lia & Adib</h1>
        <h2 className="date-header-top">January 22, 2022</h2>
      </div> */}
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active pickgradient" data-bs-interval="2500">
            <img
              className="img-slide"
              alt="lia adib pintu keluar"
              src="https://lh3.googleusercontent.com/fife/AAWUweV4MgkzxFz1Kd3de1y-ZkokRPJnsuXRp63qs8LV54OooS6LNDS7pEb8iflwAz34uPlI6u0yOcAiocs6YTe_aX4KTIkS9E9dmD4FsiWnrQBX00Q91hxbdXCWMYthFkezshdMB6_dT3ugCImRmyaE92RcwOQPHpS63dxqR9o4i5LSkTPbOHM0X1BEQGEtpn7uePgvzom5xiSl-Q-A6QBffQ5zP9F7T1yQrzsOPepC6I3ryvxwVbrlBSDoDMt1BoYfuegnZRL9KexOcutI_xA8z2BQdmKvX0JZOXI8-MzaCtzK5oUYgg3iSfpDboENJSuXsXUPKS3K4Nn0cNrYL0foP4jZGss-Wt4fLA1beMPLMkHPs8eaecbe3QDTbXpstaf-FR29WaTjkGFC0SNo6VwLuw0tD2pwhBfyhM_lSX3GMY0VVk9onpN5phDAzdtdIP1H_6cbDJCbqKVzy3q1a0BycvKULwq-WVSxt4el7hpv6hEmJtpz29WT1hmQMsDL6pFeMbZjMOcBrF6VdTk7LhuM7HCQCOl4ywRGQLYE4C35gFjuqOe4K_zLOKfzULnImtC0jq72LjYi8pZo5I8ihSgARO9REL-p_rBzm7yPyWIMr3KunGFYnWqvLc3BaA3lraqk079oXB-MXeI5Y56P_-cE822o66GLTVQa9blCX-domuJYgEimU2PElDsy5AwTpKxSN5tV5wttdE3IBGdW39E6zBUWqVknuaR8DA=w2000-h2000-ft"
            ></img>

            <div className="container">
              <div className="carousel-caption text-start">
                {/* <h1 className="caption-title">Example headline.</h1>
                <p className="caption-detail">Some representative placeholder content for the first slide of the carousel.</p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item pickgradient" data-bs-interval="2500">
            <img
              className="img-slide"
              alt="lia adib pintu keluar"
              src="https://lh3.googleusercontent.com/fife/AAWUweUkwryTjANohtWYVVIuLgKyAh1il73b6z8eN2z3hrpHDnUL7-DodAynb2eA4R1TDscsGcs1Geddk_AuhWLjYPmbfLLtSL9dt9AWeEm1Zh1kWjW533-WKJuI51gTFcgKlccInWzJSW4TkywuzpQOQROs3G07yg7wynZuVHPkX8WlqQifjbU0qJacOb1tISf2z9znx0UNYv47ye5sdyynzvsbWr8cZRMUkR7yVaSIf_M2ll2Ed-Cvn4_xeSaX7OQuoyHTS03RAHAXv668bBhPNn0boTUSYUgc2T52Yuz6VIrAMm8dPNpsRdp1vU8D-hcad6qWEGfp3OAIHm2D2OkhVv0j10EgZMR2tFgqXR2UtXyXS3rmIOe5ueQ6pg18bb2lhOMjgxY_V3ajdQKxqYcRnOcVBNTYl9uqNuUiL1oQY86nryqimZCTThiokgaLMjAek3qhcajhgIYm-v0yyN8tki0jvcs88hhlF_mcknaZmnb7SYpsbAQTGMZCvDIeNz_Z_Dj2nOQDAkjqzJe0TZSkBi0ErwH5Mr-Cf6O0072O3xEJrNblItR5wj6cKEk6Ezs87ADu5sfvHORxvmarDY6MpgtLb8oVYxvblj8UF904h9nkgjYB8gFYdgR_qFlFdfnyeszmgdj1q0Zp00Vsq3cUhL8V0PIV3iiR1oKNK9L_9v2gVpCGAUBvZf09_k59T0fC2-3KjbqNJ04kJvVU7AfHmdY4yABKGhh2Gw=w2000-h2000-k-ft"
            ></img>

            <div className="container">
              <div className="carousel-caption">
                {/* <h1 className="caption-title">Another example headline.</h1>
                <p className="caption-detail">Some representative placeholder content for the second slide of the carousel.</p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item pickgradient" data-bs-interval="2500">
            <img
              className="img-slide"
              alt="lia adib pintu keluar"
              src="https://lh3.googleusercontent.com/fife/AAWUweVEv0JGIih7co3421-fUlwLCw7YHFwn8mlN3vpYK4z6Ztdnvj-KhSJqi3Jy9bhD2uEYnB45Ov5bQprYhmPkqel-GmzsgBlBaeWuDFgQoBXRqpVziYoIM9hr_TvHgg3Q9P6igKxBwRwRFPKQ0KP_OKNWXlirLGQXGQwkl3bPM5ETwZ0pEkAYgwxMw2bF5VVBT4Lvhd3KNhO_Gt3tgAH1FaSxKCmO2-f4Qi1uBz4E3bwCOq_baHT1teyzEucCtiK5vYT1ussQIQ6B6aTFRUpw-HpnQL2_gr_Mn3YeDViTjCaj43o7Daer00xtuVQF7TtM2diANm62Iyp44ZzLUW4-tGWqSGCo_AKeFDyJX5Phk-e43RGhgEPYksRIOvbWnhzDgMkK0Yr_2V6gDMnlxcHu1108rHpTuoBJ3fjJGhBYm43L-hyNMITiyMMUtAUxYrP4HOGIW33TejogrO7dXIQJpqfPYfgnDklH8283uauQrdS33EUkgbB34Etz7v-QINcP87gHajzAeopeDe_iEEwiu2MEM-b-lJ0Zoo9hxOPeEv5rcB1kkcq88azcf4K0ofPA3tGXyO547Bop87dO_bJmeROR_8kEcey--32l4cffjRpovUq46xmU8FjNv3_pKYBDVxHdlF1-XRR4eDUdJWmcJmyjUO3iGptcsPG4hxKFsYcncyXxO3AyyTHJ0FwdKNHWpmiYFeUk2y1BrlJNgNd0hFo8GLnfd9Fcyw=w2000-h2000-k-ft"
            ></img>

            <div className="container">
              <div className="carousel-caption text-end">
                {/* <h1 className="caption-title">One more for good</h1>
                <p className="caption-detail">Some representative placeholder content for the third slide of this carousel.</p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item pickgradient" data-bs-interval="2500">
            <img
              className="img-slide"
              alt="lia adib pintu keluar"
              src="https://lh3.googleusercontent.com/fife/AAWUweV7mKAiY80aVYjqvmaI3hwZ_OuJnD5YdlWXivnjmlsqA6K3E9WRkHKO1dXGOOAMRP5TImeV23oRo2rcwikbPR4DZiuU8pU8uOYMOY14CPuPB1WjCIssLSRvyNQZE1PMaRw1oInBUKTu6cRvMArLzc2l8AafdZoLVWkT6iqC3tXXqczd1XfadII0QfFVEuAhk7VxZbK8FuYww_NHq4-ZhX8G-E0HrrHiyPPaGoUQWiPBELu41_g-2Y7mCLUlOr5co3JPxcuZKBwti1_4pE2Jppb-fE4JTgkuAlunGouEsufqNqdZPOIg3NE5s-BiubLgN8ytVeYUCGrBF40r26rYx_jKbsf8c8f-YvFgzeO0N14bQTIHXy6v-TX_CMo8sKshju9bpRdmOVwaaWPeouE72851Z2qhQFU6INB98dKkBe7j-Z1I7swAbBHIScrHZWHUCScc62Bib8HmavIJfZ_x3ryNlNWWTqSyxpSWa22WS_rKeh0XBBPhA8d_COvVN26YYZ864Lp9W_u-emEK6A79sr_Zk1LfzhQGdekUi2L2if_g6XHjJBxLkhTAeN6rTWgaOjkFmmeD6mx8gjbEeFzhIVap0W-clSk9rffn9TLhuaZodOYfxTcVCRFNMMAPuqFWr8kYSbi5jplsnrx-v0hN_QyG3Cgi-sVdcphdJNjDDHe1pzTGPwgVlbc_Ux8eCAS3MTmv6ONHOIq_VQg8mHDoq0gPJHcet85frA=w2000-h2000-k-ft"
            ></img>

            <div className="container">
              <div className="carousel-caption text-end">
                {/* <h1 className="caption-title">One more for good</h1>
                <p className="caption-detail">Some representative placeholder content for the third slide of this carousel.</p> */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
};

export default Jumbotron;
