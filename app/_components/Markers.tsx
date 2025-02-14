"use client";

import dynamic from "next/dynamic";
import { SImageData } from "../_types/ImageData.interface";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

const Marker = dynamic(
  () =>
    import("@adamscybot/react-leaflet-component-marker").then(
      (mod) => mod.Marker
    ),
  { ssr: false }
);

interface Props {
  activeMarker?: SImageData;
  value: SImageData[];
}

const MarkerIconExample = (props: {
  content: number;
  onClick: (id: number) => void;
}) => {
  return (
    <div
      onClick={() => props.onClick(props.content)}
      style={{
        background: "#fff",
        border: "1px solid #000",
        borderRadius: "5px",
        textAlign: "center",
        padding: "5px",
        width: "25px",
      }}
    >
      {props.content}
    </div>
  );
};

const Markers = ({ activeMarker, value }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (!activeMarker || !activeMarker.origin) {
      return;
    }

    map.panTo([activeMarker.origin[1], activeMarker.origin[0]]);
  }, [activeMarker, map]);

  const handleClickMarker = (id: number) => {
    console.log(id);
  };

  return (
    <>
      {value
        .filter((row) => row.origin)
        .map((row) => (
          <Marker
            key={`marke_${row.id}`}
            position={row.origin ? [row.origin[1], row.origin[0]] : [0, 0]}
            icon={
              <MarkerIconExample content={row.id} onClick={handleClickMarker} />
            }
          />
        ))}
    </>
  );
};

export default Markers;
