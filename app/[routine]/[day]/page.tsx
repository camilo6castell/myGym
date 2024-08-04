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
        <StyledButtonBack />
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
    position: fixed;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    margin: 0rem 1rem 1rem 1rem;

    border-radius: 50%;
    background-color: #d765b3;
    border: 0.2rem solid black;

    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
    font-weight: 700;
  }

  &&::after {
    position: absolute;
    content: "Atrás";

    padding: auto;
  }
`;
