import styled from "styled-components";

import Exercise from "./exercise";

export default function WarmUp({ data }) {
  return (
    <StyledSection>
      <div className="title">
        <span className="name-title">Calentamiento — </span>
        <span className="warmup-time-title">{data.time}</span>
      </div>
      <div className="warmup-container">
        {data.exercises.map((exercise) => (
          <Exercise key={exercise.name} data={exercise} />
        ))}
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  & {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    /* margin: 0.5rem 1rem 0;
    padding: 1rem;
    border-radius: 2rem; */

    /* background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7); */

    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .title {
    margin: 0rem auto 1rem;
    padding: 0.5rem;
    background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7);
    width: 100%;
    text-align: center;
  }

  /* .name {
    width: fit-content;
    font-size: 3rem;
    margin: 0rem auto 0.4rem;
  } */
  .name-title,
  .warmup-time-title {
    font-size: 1.2rem;
    margin: 0rem auto 0.4rem;
  }

  .warmup-time-title {
    font-weight: 600;
  }

  .warmup-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;
