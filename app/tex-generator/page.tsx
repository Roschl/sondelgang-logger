"use client";

import { PermMedia } from "@mui/icons-material";
import { Alert, Button, Container, styled, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import papa from "papaparse";

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

interface CsvFormat {
  id: string;
  datetime: string;
  name: string;
  material: string;
  weight: string;
  size: string;
  desc: string;
  desc_front: string;
  desc_back: string;
  dating: string;
  tags: string;
  references: string;
  links: string;
}

export default function TexGenerator() {
  const [result, setResult] = useState<string>();
  const [errors, setErrors] = useState<string[]>([]);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files || files.length === 0) {
      setErrors([...errors, "Es wurden keine Dateien ausgewählt."]);
      return;
    }

    papa.parse<CsvFormat>(files[0], {
      complete: (e) => {
        let tex = "";

        e.data
          .filter((row) => row.id !== null)
          .forEach(
            (row, i) =>
              (tex += `
\\section*{(${i + 1}) ${row.name}}

\\begin{figure}[H]
    \\centering
    \\begin{subfigure}[b]{0.35\\textwidth}
        \\centering
        \\includegraphics[width=\\linewidth]{plomben-micha/${row.id}_av.jpg}
        \\caption{Front}
    \\end{subfigure}
    \\hspace{0.5cm}
    \\begin{subfigure}[b]{0.35\\textwidth}
        \\centering
        \\includegraphics[width=\\linewidth]{plomben-micha/${row.id}_re.jpg}
        \\caption{Back}
    \\end{subfigure}
\\end{figure}

\\textbf{Beschreibung:} ${row.desc ? row.desc + ", " : ""}${row.size}, m = ${row.weight}

\\textbf{Vorderseite:} ${row.desc_front ?? ''}

\\textbf{Rückseite:} ${row.desc_back ?? ''}`)
          );

        setResult(tex);
      },
      error: (error) => {
        setErrors([...errors, error.message]);
      },
      delimiter: ",",
      dynamicTyping: true,
      header: true,
      quoteChar: '"',
      skipEmptyLines: true,
    });
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography variant="h2">Tex - Generator</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ein Tool das Tex-Sections aus einer CSV generiert.
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<PermMedia />}
      >
        CSV auswählen
        <VisuallyHiddenInput type="file" onChange={handleUpload} />
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
      {result && <pre>{result}</pre>}
    </Container>
  );
}
