"use client";

// import Image from "next/image";
// import styles from "./page.module.css";

import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import { DataContext } from "./dataGym";

import Bar from "./components/bar";
import Days from "./components/days";

export default function Home() {
  const data = useContext(DataContext);
  const { routine, setRoutine, index, setIndex } = data.states;

  useEffect(() => {
    setRoutine(data.routines[index - 1]);
  }, [index]);

  return (
    <StyledApp>
      <Bar data={data} setRoutineIndex={setIndex} routineIndex={index} />
      <Days routine={routine} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }
`;
