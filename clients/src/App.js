import { useState, useEffect } from "react";
import Map from "react-map-gl";
import axios from "axios";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { PopUpMarker } from "./components/PopUpMarker";
import { NewPinForm } from "./components/NewPinForm";

function App() {
  const viewPortObj = {
    latitude: 42,
    longitude: 17,
    zoom: 4,
  };

  const [pins, setPins] = useState([]);
  const [currentPlace, setCurrentPlace] = useState();
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState(viewPortObj);

  useEffect(() => {
    const pinData = async () => {
      try {
        const { data } = await axios.get("/pin");
        setPins(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    pinData();
  }, []);

  const handleMarkerOnClick = (pin) => {
    setCurrentPlace(pin._id);
    setViewPort((prevSate) => {
      return { ...prevSate, longitude: pin.long, latitude: pin.lat };
    });
  };

  const handleAddNewPin = (e) => {
    const { lng: long, lat } = e.lngLat;
    setNewPlace((prevSate) => {
      return { ...prevSate, lat, long };
    });
  };

  return (
    <>
      <Map
        {...viewPort}
        style={{ width: "90vw", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onDblClick={handleAddNewPin}
      >
        <PopUpMarker
          pins={pins}
          handleMarkerOnClick={handleMarkerOnClick}
          setCurrentPlace={setCurrentPlace}
          currentPlace={currentPlace}
        />
        {newPlace && (
          <NewPinForm newPlace={newPlace} setNewPlace={setNewPlace} />
        )}
      </Map>
    </>
  );
}

export default App;
