import React from "react";

import "./dividerBottom.css";

const DividerBottom = () => {
  return (
    <div className="bg-divider-bottom">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <style></style>
        <path
          d="M 0,400 C 0,400 0,133 0,133 C 118.39999999999998,153.53333333333333 236.79999999999995,174.06666666666666 397,178 C 557.2,181.93333333333334 759.2,169.26666666666668 940,159 C 1120.8,148.73333333333332 1280.4,140.86666666666667 1440,133 C 1440,133 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#6B0F1088"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <style></style>
        <path
          d="M 0,400 C 0,400 0,266 0,266 C 113.33333333333331,259.2 226.66666666666663,252.39999999999998 405,256 C 583.3333333333334,259.6 826.6666666666667,273.6 1010,277 C 1193.3333333333333,280.4 1316.6666666666665,273.2 1440,266 C 1440,266 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#6B0F10ff"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};

export default DividerBottom;
