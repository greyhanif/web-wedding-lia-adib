import React from "react";
import image from "../../assets/images/element/atas-bawah.png";

const DividerImage = (props) => {
  return (
    <div>
      <img loading="lazy" src={props.src} className="img-fluid rounded" alt={props.alt} width="1920" height="1080"></img>
    </div>
  );
};

export default DividerImage;
