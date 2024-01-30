"use client";

import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import WarmUp from "./components/warmUp";
import Plans from "./components/plans";

import { DataContext } from "../../lib/userContext";

import { UserType, DayType, WarmUpType } from "../../lib/typesTs";

export default function DayRoutine({
  params,
}: {
  params: { routine: number; day: number };
}) {
  const data: UserType = useContext(DataContext);
  const day: DayType = data.routines[params.routine - 1].days[params.day - 1];
  const warmUp: WarmUpType = day.warmUp;
  return (
    <StyledApp>
      <WarmUp data={warmUp} />
      <Plans data={day} />
      <Link href={`/`} className="buttonback-container">
        <StyledButtonBack>Volver atrás</StyledButtonBack>
      </Link>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
  }

  .buttonback-container {
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: center;
  }
`;

const StyledButtonBack = styled.div`
  & {
    border-radius: 1rem;
    padding: 1rem;

    margin: 0rem 1rem 1rem 1rem;

    border-radius: 0.5rem;
    background-color: #d765b3;

    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
    font-weight: 700;
  }
`;
