import React from "react";
import "./divider.css";

const Divider = () => {
  return (
    <div className="bg-divider">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <style></style>
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 188.40000000000003,153.8 376.80000000000007,174.6 549,175 C 721.1999999999999,175.4 877.2,155.4 1023,145 C 1168.8,134.6 1304.4,133.8 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#6B0F1088"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
        <style></style>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 193.7333333333333,250 387.4666666666666,234 565,237 C 742.5333333333334,240 903.8666666666666,262 1047,270 C 1190.1333333333334,278 1315.0666666666666,272 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#6B0F10ff"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
};

export default Divider;
