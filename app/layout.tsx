// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ["latin"] });

"use client";

// Basic imports
import "./reset.css";
import React from "react";
//
// Context
import { DataProvider } from "./lib/userContext";
//
// REDUX
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
//
// FONT
import { Inter } from "next/font/google";

// export const metadata = {
//   title: "Rutina de GYM",
//   description: "Aplicación para la guia la rutina de GYM",
// };

const roboto = Inter({
  subsets: ["latin"],
  display: "block",
});

//con Roboto
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// Local Font
// import localfont from "@next/font/local"
// const myFont = localFont({src: "./rute2myFont.woff2"})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* <body className={roboto.className}> */}
      <body className={`${roboto.className} antialiased`}>
        <DataProvider>
          <Provider store={store}>{children}</Provider>
        </DataProvider>
      </body>
    </html>
  );
}
