import React from "react";

const DividerImage = (props) => {
  return (
    <div>
      <img loading="lazy" src={props.src} className="img-fluid" alt={props.alt} width="1920" height="1080"></img>
    </div>
  );
};

export default DividerImage;
