import React from "react";

import "./footer.css";
import getServerResponseTime from "get-server-response-time/client";
import { useState, useEffect } from "react";

const Footer = () => {
  // var getServerResponseTime = require("get-server-response-time");
  const [time, setTime] = useState("");

  useEffect(() => {
    let get = true;
    getTimeServer();

    return function cleanup() {
      get = false;
    };
  }, []);

  // simple call
  function getTimeServer() {
    getServerResponseTime(`${process.env.REACT_APP_API_URL}/messages`).then((responseTime) => {
      // console.log(responseTime);
      setTime(responseTime);
    });
  }

  return (
    // <div class="bg-footer">
    <footer className="py-5 bg-footer">
      <div className="row mx-0 text-center">
        <div className=" text-center">
          <form>
            <h5 className="title-footer">Sekian</h5>
            <p className="detail-footer">Terimakasih</p>
          </form>
        </div>
      </div>

      {/* <div className="d-flex justify-content-between text-center mb-5">
          <div className="col-3 py-2 px-1">
            <div className="">
              <div className=" p-2">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  className=" icon-footer p-3"
                  alt="Handsanitizer"
                ></img>

                <p className="legend-footer">React JS</p>
              </div>
            </div>
          </div>
          <div className="col-3 py-2 px-1">
            <div className="">
              <div className=" p-2">
                <img
                  src="
                  https://miro.medium.com/max/800/0*cQTv5n6xV7opBBIB"
                  className=" icon-footer p-3"
                  alt="Handsanitizer"
                ></img>

                <p className="legend-footer">Express JS</p>
              </div>
            </div>
          </div>
          <div className="col-3 py-2 px-1">
            <div className="">
              <div className=" p-2">
                <img
                  src="
                  https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                  className=" icon-footer p-3"
                  alt="Handsanitizer"
                ></img>

                <p className="legend-footer">MySQL</p>
              </div>
            </div>
          </div>
        </div> */}

      <div className="mt-5 border-top">
        <p className="copyright-footer ms-4 mt-3">&copy; 2021 Wedding Information System, Inc. All rights reserved.</p>
        <div className="code ms-4 text-light mt-2">API URL Backend : {process.env.REACT_APP_API_URL}</div>
        <div className="code ms-4 text-light mb-4">Response time : {time}ms</div>
        {/* <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram" />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook" />
                </svg>
              </a>
            </li>
          </ul> */}
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
