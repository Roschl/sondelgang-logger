import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sondelgang",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  SONDELGANG
                </Typography>
                <Box
                  sx={{
                    ml: "auto",
                  }}
                >
                  <Link href="/impressum">
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Impressum und Datenschutz
                    </Button>
                  </Link>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="lg" sx={{ p: 5 }}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
