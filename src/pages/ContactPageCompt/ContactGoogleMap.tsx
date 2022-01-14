import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { MapStyles } from "./GoogleMapStyles";
import { getFormSubmittedSlector } from "../../store/selectors";
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
  const formSubmitted = useSelector(getFormSubmittedSlector);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API as string,
  });


  return isLoaded ? (
    <GoogleMap
      options={{
        styles: MapStyles,
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
        position={{ lat: 37.1253351, lng: -8.5400361 }}
      />

      {formSubmitted && (
        <InfoWindow position={{ lat: 37.2253351, lng: -8.5200361 }}>
          <div className="h-16  text-center grid justify-items-center">
            <h1 className="text-lg text-PurpleColor font-Karla font-semibold">
              Thank you for your message! <br />
            </h1>

            <h1 className=" text-sm text-PurpleColor font-Karla ">
              i will check your request as soon as possible.
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
