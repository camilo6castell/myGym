"use client";
import styled from "styled-components";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <SpanStyled />;
}

const SpanStyled = styled.span`
  && {
    position: fixed;
    top: 50%;
    left: 50%;

    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  &&::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #263238;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
