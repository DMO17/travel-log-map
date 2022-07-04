import { useState, useEffect } from "react";
import Map from "react-map-gl";
import axios from "axios";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Markers } from "./components/Markers";
import { PopUp } from "./components/PopUp";

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const pinData = async () => {
      try {
        const { data } = await axios.get("/pin");
        setPins(data);
      } catch (error) {}
    };

    pinData();
  }, []);

  const viewPort = {
    latitude: 46,
    longitude: 17,
    zoom: 4,
  };

  return (
    <Map
      initialViewState={viewPort}
      style={{ width: "90vw", height: "90vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    >
      <Markers pins={pins} />
      <PopUp pins={pins} />
    </Map>
  );
}

export default App;
