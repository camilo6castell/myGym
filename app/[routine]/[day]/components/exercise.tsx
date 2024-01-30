import styled from "styled-components";

import { ExerciseType } from "../../../lib/typesTs";

export default function Exercise({ data }: { data: ExerciseType }) {
  const configKeys: string[] = data.configKeys;
  const configValues: string[] = data.configValues;
  return (
    <WarnUpItem>
      <span className="name">{data.name}</span>
      <div className="warnup-container">
        <div className="exercise-name">
          {configKeys.map((configItem: string) => (
            <span key={configItem} className="exercise-config">
              {configItem}
            </span>
          ))}
        </div>
        <div className="exercise-vale">
          {configValues.map((configValue: string) => (
            <span key={configValue} className="exercise-value">
              {configValue}
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 1rem;

    width: 100%;
  }

  .name {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    width: 100%;
    text-align: left;
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
