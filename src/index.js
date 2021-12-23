import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <RecoilRoot> */}
    <BrowserRouter>
      {/* <React.Suspense fallback={<div>Loading...</div>}> */}
      <App />
      {/* </React.Suspense> */}
    </BrowserRouter>
    {/* </RecoilRoot> */}
  </React.StrictMode>,
  document.getElementById("root")
);
