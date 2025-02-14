"use client";

import dynamic from "next/dynamic";
import { SImageData } from "../_types/ImageData.interface";
import Markers from "./Markers";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

interface Props {
  activeMarker?: SImageData;
  value?: SImageData[];
}

const Map = ({ activeMarker, value }: Props) => {
  if (!value) {
    return;
  }

  return (
    <MapContainer
      center={[53.559, 10.155]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers activeMarker={activeMarker} value={value} />
    </MapContainer>
  );
};

export default Map;
