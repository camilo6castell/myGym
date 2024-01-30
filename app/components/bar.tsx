"use client";
// regular imports
import { useContext, useEffect } from "react";
import Image from "next/image";

import styled from "styled-components";
//
// context
import { DataContext } from "../lib/userContext";
//
// REDUX
import { useAppSelector, useAppDispatch } from "../lib/redux/hooks";
import { setIndex } from "../lib/redux/indexSlice";
import { setRoutine } from "../lib/redux/routineSlice";
//
export default function Bar() {
  // getting states from redux
  const routine = useAppSelector((state) => state.routine);
  const index = useAppSelector((state) => state.index);
  //
  // getting :v setter
  const dispatch = useAppDispatch();
  //
  // using context
  const data = useContext(DataContext);
  //

  useEffect(() => {
    dispatch(setRoutine(data.routines[index.index - 1]));
  }, [index, data.routines, dispatch]);

  return (
    <StyledSection>
      <div className="img-container">
        <Image
          placeholder="empty"
          height={100}
          width={100}
          src={data.personal.photo}
          className="userImage"
          alt="User image"
          priority={false}
        />
      </div>
      <div className="userWelcome">
        <span className="welcome">Bienvenida!</span>
        <span className="name">{data.personal.name}</span>
      </div>
      <div className="pickRoutine">
        <label htmlFor="routine">Rutina</label>
        <select
          name="lenguajes"
          id="routine"
          value={index.index}
          onChange={(e) => {
            dispatch(setIndex(parseInt(e.target.value)));
          }}
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
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    width: 100%;
    height: fit-content;

    margin-top: 0rem;

    padding: 0rem 1rem 0rem 1rem;
    border-radius: 1rem;

    color: aliceblue;
    text-shadow: 0px 0px 2px rgba(217, 222, 228, 0.7);
  }

  .img-container {
    width: fit-content;
  }

  .userImage {
    /* width: 100%; */
    max-width: 124px;

    margin: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 50%;

    opacity: 0;

    animation: 0.7s ease 0.1s forwards zoomIn;
    transition: all 2s;
  }

  .userWelcome {
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem 1rem 1rem;
  }

  .welcome {
    width: fit-content;
    font-size: 1rem;
    margin: 0rem 0rem 0rem;
    padding-right: 1rem;

    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  }

  .name {
    width: fit-content;
    font-size: 1.3rem;
    margin: 0rem;
    padding-right: 1rem;
  }

  .pickRoutine {
    width: fit-content;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 0.5rem;

    /* background-color: rgb(79, 124, 136); */
    background: linear-gradient(-45deg, #aa2525, #b94848, #136e8f, #52c7c7);
    backdrop-filter: blur(10px);
  }

  select {
    margin-left: 1rem;
    font-size: 2rem;
    background-color: #201f1f;

    border-radius: 0.5rem;
  }

  #routine {
    margin-left: 0.5rem;
  }
`;

// Antiguo datatype de los useState
// Bar({
//   data,
//   index,
//   setIndex,
//   setRoutine,
// }: {
//   data: UserType;
//   index: number;
//   setIndex: React.Dispatch<React.SetStateAction<number>>;
//   setRoutine: React.Dispatch<React.SetStateAction<RoutineType>>;
// })
