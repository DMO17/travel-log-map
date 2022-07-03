import { useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const GlobalMap = ({ accessToken }) => {
  const [viewPort, setViewPort] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <Map
      initialViewState={viewPort}
      style={{ width: "90vh", height: "90vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={accessToken}
    ></Map>
  );
};
