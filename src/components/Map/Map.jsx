import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "./Map.css";
const Map = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDYAEk1slJnJ2QAmJ56MJHZe7lv0NrkPmY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {
          console.log("change");
        }}
        onChildClick={() => {
          console.log("child click");
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
