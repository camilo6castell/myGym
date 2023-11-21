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
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.5rem;
    width: 100%;
  }

  .plan-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-bottom: 1rem;
  }

  li {
    font-size: 1.2rem;
    margin-left: 3rem;
    width: 80%;
  }
`;
