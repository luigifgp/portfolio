import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { MapStyles } from "./GoogleMapStyles";
import { getFormSubmittedSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import { FcSearch } from "react-icons/fc";




const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.1253351,
  lng: -8.5200361,
};

function GoogleMapLocation() {
  const formSubmitted = useSelector(getFormSubmittedSelector);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API as string,
  });


  return isLoaded ? (
    <GoogleMap
      options={{
        styles: MapStyles,
        mapId: process.env.REACT_APP_MAPID,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
      }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
    >
      <Marker
        icon={{
          url: "/svg/marker-luigi.svg",
          anchor: new google.maps.Point(17, 66),
          scaledSize: new google.maps.Size(60, 60),
        }}
        animation={google.maps.Animation.DROP}
        position={{ lat: 37.1253351, lng: -8.5400361 }}
      />

      {formSubmitted && (
        <InfoWindow position={{ lat: 37.2253351, lng: -8.5200361 }}>
          <div className="h-16  text-center grid justify-items-center">
            <h1 className="text-lg text-PurpleColor font-Karla font-semibold duration-500 transition-all">
              Thank you for your message! <br />
            </h1>

            <h1 className=" text-sm text-PurpleColor font-Karla ">
              i will check your subject matter as soon as possible.
            </h1>
            <FcSearch className="" size={20} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMapLocation;
