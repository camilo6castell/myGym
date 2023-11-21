import styled from "styled-components";

export default function Plan({ data }) {
  return (
    <StyledPlan>
      <p className="name">{data.name}</p>
      <div>
        <ol className="plan-container">
          {data.containt.map((item) => (
            <li key={item} type="1">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </StyledPlan>
  );
}

const StyledPlan = styled.div`
  && {
  }
  .name {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0rem 0 0.5rem 1rem;
    width: 100%;
  }

  .plan-container {
    display: flex;
    flex-direction: column;

    justify-content: space-around;
  }

  li {
    font-size: 1.3rem;
    margin-left: 4rem;
  }
`;
