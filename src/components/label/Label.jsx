import "./label.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import CircularProgress from "@mui/material/CircularProgress";

const Label = () => {
  return (
    <div className="bg-label">
      {!sessionStorage.getItem("name") ? (
        <div className="label-wrap">
          <div className="label-title">Kepada:</div>
          <div className="label-desc">Bapak/Ibu/Sodara/i Tamu Undangan</div>
          <div className="label-title">Alamat:</div>
          <div className="label-desc">Di Tempat</div>
        </div>
      ) : (
        <div className="label-wrap">
          <div className="label-title">Kepada:</div>
          <div className="label-desc">{sessionStorage.getItem("name")}</div>
          <div className="label-title">Alamat:</div>
          <div className="label-desc">{sessionStorage.getItem("address")}</div>
          <div className="label-desc">{sessionStorage.getItem("city")}</div>
        </div>
      )}
    </div>
  );
};

export default Label;
