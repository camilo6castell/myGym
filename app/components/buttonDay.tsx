import styled from "styled-components";

import { DayType } from "../lib/typesTs";

import Link from "next/link";

export default function ButtonDay({
  day,
  routineNumber,
}: {
  day: DayType;
  routineNumber: number;
}) {
  return (
    <StyledButtonDay>
      <Link href={`/${routineNumber}/${day.day}`}>
        <span className="day">Día {day.day}</span>
        <span className="topic"> {day.body}</span>
      </Link>
    </StyledButtonDay>
  );
}

const StyledButtonDay = styled.div`
  & {
    width: 95%;
    padding: 1rem;
    border-radius: 0.5rem;
    /* background-color: #d765b3; */

    color: aliceblue;

    animation: 1s ease 0s forwards appear;
    transition: all 2s;
  }

  a {
    display: flex;
    align-items: stretch;
  }

  span {
    display: flex;
    align-items: center;
  }
  .day {
    width: fit-content;

    white-space: nowrap;
    font-size: 1.5rem;
    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);

    padding: 0rem;
    margin: 0rem;
  }

  .topic {
    justify-content: center;
    flex-grow: 1;
    /* height: 3rem; */
    height: 6dvh;

    margin: 1rem 0 1rem 1rem;
    padding: 0.5rem;
    border-radius: 1rem;

    white-space: nowrap;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    color: aliceblue;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);

    background: linear-gradient(
      -45deg,
      #aa252579,
      #b9484871,
      #136e8f82,
      #52c7c797
    );
    /* background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7); */
  }
`;
