import styled from "styled-components";

export default function Exercise({ data }) {
  return (
    <WarnUpItem>
      <span className="name">{data.name}</span>
      <div className="warnup-container">
        <div className="exercise-name">
          {data.config.map((c) => (
            <span key={c} className="exercise-config">
              {c}
            </span>
          ))}
        </div>
        <div className="exercise-vale">
          {data.configValue.map((c) => (
            <span key={c} className="exercise-value">
              {c}
            </span>
          ))}
        </div>
      </div>
    </WarnUpItem>
  );
}

const WarnUpItem = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 1rem;
  }

  .name {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .warnup-container {
    display: flex;
    /* flex-direction: column; */
  }

  .exercise-name,
  .exercise-vale {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0;
  }

  .exercise-name {
    align-items: end;
  }

  .exercise-vale {
    font-weight: 500;
  }
`;
