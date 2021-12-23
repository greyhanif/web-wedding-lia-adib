import "./intro.css";
import ImgJmb from "../../assets/images/web/jumbotron.jpg";
import ECorner from "../../assets/images/element/corner.png";
import Label from "../label/Label";

const ticket = localStorage.getItem("ticketCode");

const Header = () => {
  return (
    <div className="i">
      <img className="e-corner-top" src={ECorner}></img>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Undangan Pernikahan</h2>
          <h1 className="i-name">Lia & Adib</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Akad</div>
              <div className="i-title-item">Resepsi</div>
              <div className="i-title-item">Akad</div>
              <div className="i-title-item">Resepsi</div>
              <div className="i-title-item">Akad</div>
              <div className="i-title-item">Resepsi</div>
            </div>
          </div>
         
        </div>
      </div>
      {/* <div className="i-right"><img src={ImgJmb} alt="" className="i-img" /></div> */}
      <img className="e-corner-bottom" src={ECorner}></img>
    </div>
  );
};

export default Header;
