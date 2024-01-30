// import { StaticImageData } from "next/image";

export type ExerciseType = {
  name: string;
  configKeys: string[];
  configValues: string[];
};

export type PlanType = { name: string; containt: string[] };

export type WarmUpType = {
  time: string;
  exercises: ExerciseType[];
};

export type DayType = {
  day: number;
  body: string;
  warmUp: WarmUpType;
  duration: string;
  plans: PlanType[];
};

export type RoutineType = {
  number: number;
  objective: string;
  days: DayType[];
};

export type UserType = {
  personal: {
    name: string;
    photo: string;
  };
  routines: RoutineType[];
};

// Estados, pendiente de redux para mejorar esto

export type StateType = {
  routine: RoutineType;
  setRoutine: React.Dispatch<React.SetStateAction<RoutineType>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
