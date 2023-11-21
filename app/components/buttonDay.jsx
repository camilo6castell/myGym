import styled from "styled-components";

import Link from "next/link";

export default function ButtonDay({ day, topic, routineNumber }) {
  return (
    <StyledButtonDay>
      <Link href={`/${routineNumber}/${day}`}>
        <span className="day">Día {day}:</span>
        <span className="topic"> {topic}</span>{" "}
      </Link>
    </StyledButtonDay>
  );
}

const StyledButtonDay = styled.div`
  & {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #d765b3;

    color: aliceblue;
  }

  .day {
    font-size: 1rem;
    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .topic {
    font-size: 1.1rem;
    font-weight: 700;
    color: aliceblue;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
`;
