import { useState, useEffect } from "react";
import Map from "react-map-gl";
import axios from "axios";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { PopUpMarker } from "./components/PopUpMarker";

function App() {
  const viewPort = {
    latitude: 46,
    longitude: 17,
    zoom: 4,
  };

  const [pins, setPins] = useState([]);
  const [currentPlace, setCurrentPlace] = useState();
  const [polarity, setPolarity] = useState(false);

  useEffect(() => {
    const pinData = async () => {
      try {
        const { data } = await axios.get("/pin");
        setPins(data.data);
      } catch (error) {}
    };

    pinData();
  }, []);

  const handleMarkerOnClick = (pin) => {
    setCurrentPlace(pin);
  };

  return (
    <>
      <Map
        initialViewState={viewPort}
        style={{ width: "90vw", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >
        <PopUpMarker
          pins={pins}
          handleMarkerOnClick={handleMarkerOnClick}
          setCurrentPlace={setCurrentPlace}
          currentPlace={currentPlace}
          polarity={polarity}
        />
      </Map>

      <button onClick={() => setPolarity((prevState) => !prevState)}>
        CLICK HERE
      </button>
    </>
  );
}

export default App;
