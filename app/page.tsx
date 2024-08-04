"use client";
//Suspense
// import { Suspense } from "react";
// import Loading from "./loading";
// Library Style
import styled from "styled-components";
//
// Components
import Bar from "./components/bar";
import Days from "./components/days";
//
export default function Home() {
  return (
    <StyledApp>
      <Bar />
      <Days />
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

    /* padding: 1rem; */
  }
`;
