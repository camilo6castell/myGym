// basic import
import styled from "styled-components";
//
// REDUX
import { useAppSelector } from "../lib/redux/hooks";
//
//components
import ButtonDay from "./buttonDay";
//
export default function Days() {
  const routine = useAppSelector((state) => state.routine);
  return (
    <StyledSection>
      {routine.days ? (
        routine.days.map((day) => (
          <ButtonDay key={day.day} routineNumber={routine.number} day={day} />
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

    width: 100%;
    height: 100%;
    overflow: hidden;

    padding: 1rem;
    border-radius: 1rem;

    background-color: rgb(13, 20, 29);

    transition: all 2s;
  }
`;

// color: aliceblue;
// text-shadow: 0px 0px 2px rgba(217, 222, 228, 0.7);
