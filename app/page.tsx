"use client";

import { Alert, Avatar, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import exifr from "exifr";
import proj4 from "proj4";
import epsg4326 from "epsg-index/s/4326.json";
import epsg25832 from "epsg-index/s/25832.json";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Map from "./_components/Map";
import { SImageData } from "./_types/ImageData.interface";
import { FileDownload, PermMedia } from "@mui/icons-material";
import { asBlob, generateCsv, mkConfig } from "export-to-csv";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const columns: GridColDef[] = [
  {
    field: "url",
    headerName: "Foto",
    width: 90,
    renderCell: (params) => (
      <Avatar
        src={params.value}
        sx={{ marginY: "3px", width: 56, height: 56 }}
        variant="square"
      />
    ),
  },
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Dateiname",
    width: 250,
  },
  {
    field: "origin",
    headerName: "EPSG 4326",
    width: 250,
    renderCell: (params) =>
      !params.value
        ? ""
        : params.value[0].toFixed(5) + " / " + params.value[1].toFixed(5),
  },
  {
    field: "target",
    headerName: "EPSG 25832",
    width: 250,
    renderCell: (params) =>
      !params.value
        ? ""
        : params.value[0].toFixed(2) + " / " + params.value[1].toFixed(2),
  },
];

export default function Home() {
  const [activeMarker, setActiveMarker] = useState<SImageData | undefined>();
  const [data, setData] = useState<SImageData[] | undefined>();
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>();
  const [errors, setErrors] = useState<string[]>([]);

  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files || files.length === 0) {
      setErrors([...errors, "Es wurden keine Dateien ausgewählt."]);
      return;
    }

    const d: SImageData[] = [];

    for (let i = 0; i < files.length; i++) {
      if (!files[i]) {
        continue;
      }

      const file = files[i];

      try {
        const exifData = await exifr.parse(file);

        if (!exifData || !exifData.GPSLatitude || !exifData.GPSLongitude) {
          setErrors([
            ...errors,
            `No GPS metadata found in image: ${file.name}`,
          ]);
          d.push({
            id: i,
            name: file.name,
            url: URL.createObjectURL(file),
            origin: undefined,
            target: undefined,
          });
          continue;
        }

        const latitude =
          (exifData.GPSLatitudeRef === "S" ? -1 : 1) *
          (exifData.GPSLatitude[0] +
            exifData.GPSLatitude[1] / 60 +
            exifData.GPSLatitude[2] / 3600);
        const longitude =
          (exifData.GPSLongitudeRef === "W" ? -1 : 1) *
          (exifData.GPSLongitude[0] +
            exifData.GPSLongitude[1] / 60 +
            exifData.GPSLongitude[2] / 3600);

        d.push({
          id: i,
          name: file.name,
          url: URL.createObjectURL(file),
          origin: [longitude, latitude],
          target: proj4(epsg4326.proj4, epsg25832.proj4, [longitude, latitude]),
        });
      } catch (error) {
        setErrors([
          ...errors,
          `Error reading EXIF data of ${file.name}: ${error}`,
        ]);
      }
    }

    const firstMarkerWithCoordinates = d.find(
      (row) => row.origin !== undefined
    );

    const csvConfig = mkConfig({
      useKeysAsHeaders: true,
    });
    const csv = generateCsv(csvConfig)(
      d.map((row) => ({
        key: row.id,
        file: row.name,
        epsg4326_x: row.origin ? row.origin[0] : null,
        epsg4326_y: row.origin ? row.origin[1] : null,
        epsg25832_x: row.target ? row.target[0] : null,
        epsg25832_y: row.target ? row.target[1] : null,
      }))
    );
    const blob = asBlob(csvConfig)(csv);
    const url = URL.createObjectURL(blob);

    setData(d);
    setActiveMarker(firstMarkerWithCoordinates);
    setDownloadUrl(url);
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h2">GeoTagConverter</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ein Tool zum Auslesen und Umwandeln von Geodaten aus Bildern.
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<PermMedia />}
      >
        Bilder auswählen
        <VisuallyHiddenInput type="file" onChange={handleUpload} multiple />
      </Button>
      <Button
        disabled={!data}
        href={downloadUrl}
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<FileDownload />}
      >
        Als CSV herunterladen
      </Button>
      {errors.map((error, key) => (
        <Alert
          key={key}
          severity="error"
          onClose={() => setErrors(errors.filter((_, k) => k !== key))}
        >
          {error}
        </Alert>
      ))}
      {data && (
        <>
          <Map activeMarker={activeMarker} value={data} />
          <DataGrid
            rows={data}
            rowHeight={62}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
          />
        </>
      )}
    </Container>
  );
}
