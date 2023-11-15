"use client";

// import Image from "next/image";
// import styles from "./page.module.css";

import Button from "@mui/material/Button";

import { useContext } from "react";
import { DataContext } from "./dataGym";

export default function Home() {
  const data = useContext(DataContext);
  return (
    <div>
      <Button> {data.name}</Button>
    </div>
  );
}
