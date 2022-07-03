import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReviewCard } from "./components/ReviewCard";

function App() {
  const [viewPort, setViewPort] = useState({
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <Map
      initialViewState={viewPort}
      style={{ width: "90vw", height: "90vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    >
      <Marker longitude={-0.116773} latitude={51.510357} color="blue" />(
      <Popup
        longitude={-0.116773}
        latitude={51.510357}
        anchor="left"
        // onClose={() => setShowPopup(false)}
      >
        <ReviewCard />
      </Popup>
      )
    </Map>
  );
}

export default App;
