import styled from "styled-components";

import ButtonDay from "./buttonDay";

export default function Days({ routine }) {
  return (
    <StyledSection>
      {routine.days ? (
        routine.days.map((day) => (
          <ButtonDay
            routineNumber={routine.number}
            key={day.day}
            day={day.day}
            topic={day.body}
          />
        ))
      ) : (
        <button>cargando</button>
      )}
    </StyledSection>
  );
}

const StyledSection = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: fit-content;
    height: 80%;
    margin: 1rem 1rem;
    padding: 1rem;
    border-radius: 2rem;

    background-color: rgb(13, 20, 29);

    color: aliceblue;
    text-shadow: 0px 0px 2px rgba(217, 222, 228, 0.7);
  }

  span {
    width: fit-content;
  }
`;
