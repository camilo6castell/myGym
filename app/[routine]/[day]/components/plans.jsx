import styled from "styled-components";

import Plan from "./plan";

export default function Plans({ data }) {
  return (
    <StyledSection>
      <div className="title">
        <span className="plans-title">Rutina de hoy: </span>
        <span className="duration-title">{data.duration}</span>
      </div>
      <div className="plan-container">
        {data.plan.map((p) => (
          <Plan key={p.name} data={p} />
        ))}
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  & {
    display: flex;
    flex: 55%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    /* margin: 0.5rem 1rem 0;
    padding: 1rem;
    border-radius: 2rem;

    background-color: rgb(79, 124, 136); */

    color: aliceblue;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0rem auto 1rem;
    padding: 0.5rem;
    background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7);
    width: 100%;
  }

  .plans-title,
  .duration-title {
    font-size: 1.2rem;
    margin: 0rem auto 0rem;
    width: fit-content;
  }

  .plans-title {
    margin-bottom: 0.5rem;
  }

  .duration-title {
    font-weight: 600;
    text-align: center;
  }

  .name {
    width: fit-content;
    font-size: 1.1rem;
    margin: 0rem auto 0.4rem;
  }

  .duration {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .plan-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;

    /* background-color: rgb(2, 87, 190); */
  }
`;
