"use client";
import styled from "styled-components";

export default function Bar({ data, setRoutineIndex, routineIndex }) {
  return (
    <StyledSection>
      <span className="name">{data.name}</span>
      <div className="pickRoutine">
        <label htmlFor="routine">Rutina</label>
        <select
          name="lenguajes"
          id="routine"
          value={routineIndex}
          onChange={(e) => setRoutineIndex(e.target.value)}
        >
          {data.routines.map((routine) => (
            <option key={routine.number} value={routine.number}>
              {routine.number}
            </option>
          ))}
        </select>
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

    width: fit-content;
    height: fit-content;
    margin: 1rem 1rem 0;
    padding: 1.5rem;
    border-radius: 2rem;

    /* background-color: rgb(79, 124, 136); */
    background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7);

    color: aliceblue;
    text-shadow: 0px 0px 2px rgba(217, 222, 228, 0.7);
  }

  .name {
    width: fit-content;
    font-size: 1rem;
    margin: 0rem auto 0.4rem;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .pickRoutine {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border-radius: 0.5rem;

    background-color: rgba(2, 87, 190, 0.279);
    backdrop-filter: blur(10px);
  }

  select {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
