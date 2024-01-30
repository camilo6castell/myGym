"use client";
// basic imports
import React, { createContext } from "react";
//
// ts types
import { UserType } from "./typesTs";
//
// image, this should be taken from a database
// import userImage from "../../public/user/307141992_10159207494737965_8265855421436208415_n.png";
//
// this is where I get de data
export const user: UserType = {
  personal: {
    name: "Isabel Herrera",
    photo: "/user/307141992_10159207494737965_8265855421436208415_n.png",
  },
  routines: [
    {
      number: 1,
      objective: "Aumentar masa muscular",
      days: [
        {
          day: 1,
          body: "ABDOMEN - LUMBARES",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X30 — DESCANSO 2 MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: [
                "Plancha alta TRX rodillas al pecho",
                "Mountain climbers TRX",
                "Plancha alta abduccion cadera TRX",
              ],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Abdomen apoyo pies minitram",
                "Plancha isometrica",
                "Ranitas piso con fitball entre los pies",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Orador dinamico fitball",
                "Abdomen fitball pasar de manos a pies",
                "Cargar fitball a 90° pierna rotacion tronco tocar talones",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Lumbares banco horizontal supremacy",
                "Abdomen agarre pasa manos elevacion rodillas",
                "Transferencias piso",
              ],
            },
          ],
        },
        {
          day: 2,
          body: "GLUTEOS",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X20 — DESCANSO 1 MIN",
          plans: [
            {
              name: "RUTINA",
              containt: [
                "Ascensos al cajon con extension cadera en smith",
                "Tijera avanzada mc cada serie aumentar repeticion por pierna",
                "Puente bipodal mc pies sobre cajon + isometrico al final 10sg",
                "Peso muerto barra Z",
                "Patada gluteo con abduccion mc",
                "Sentadilla sumo mc step",
                "Abdomen elevacion piernas alterno (3x30rep)",
              ],
            },
          ],
        },
        {
          day: 3,
          body: "ESPALDA - PECHO",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3x15 — DESCANSO 1 MIN",
          plans: [
            {
              name: "RUTINA",
              containt: [
                "Dominadas cerradas banda de poder",
                "Halon en 2 poleas posicion de rodillas",
                "Remo 2 mc en posicion ventral banco inclinado",
                "Remo agarre prono barra z",
                "Push up",
                "Crossover de polea baja",
                "Pull over banco plano mc",
                "Abdomen agarre pasamanos elevacion rodillas y oblicuos (3x20c/u)",
              ],
            },
          ],
        },
        {
          day: 4,
          body: "CIRCUITO FUNCIONAL",
          warmUp: {
            time: "10 minutos",
            exercises: [
              {
                name: "Remo al aire",
                configKeys: ["duración"],
                configValues: ["10 minutos"],
              },
            ],
          },
          duration: "4X1MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: [
                "Cuerda de batida",
                "Pasar la cuerda de batida en skipping ida y vuelta",
                "Plancha dinamica lateral",
              ],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Saltos al cajon pliometrico",
                "Sentadilla isometrica 2 bosu",
                "Abdomen velitas",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Ascensos al bosu con skipping",
                "Burpess",
                "Abdomen carpados",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Saltos laterales step mc",
                "Jumpick jack",
                "Step rodillas a codo mc cruzado",
              ],
            },
          ],
        },
        {
          day: 5,
          body: "PIERNA",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X20 — DESCANSO 2MIN",
          plans: [
            {
              name: "RUTINA",
              containt: [
                "Prensa 10 abiertas + 10 cerradas",
                "sentadilla smith",
                "leg extension maq maximal isometrico final 10 sg",
                "leg curl prono",
                "pantorrilla mc step",
                "aduccion maq",
                "sentadilla isometrica apoyo pared cargar disco",
                "ascensos al cajon unilateral tobillera lastrada",
              ],
            },
          ],
        },
        {
          day: 6,
          body: "BRAZOS",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X15 — DESCANSO 1 MIN",
          plans: [
            {
              name: "RUTINA",
              containt: [
                "Vuelos lateral polea",
                "Vuelos frontal disco",
                "Press militar mc banco sentado",
                "Curl biceps romana",
                "Curl biceps polea unilateral",
                "Copa triceps polea baja",
                "Patada triceps polea",
                "Fondos banco",
                "Push up agarre bosu inverso",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      objective: "AUMENTAR MASA MUSCULAR",
      days: [
        {
          day: 1,
          body: "ESPALDA -TRICEPS",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "4x10 — DESCANSO 1 MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: ["Dominadas maq", "Fondos maq asistido"],
            },
            {
              name: "CIRCUITO #2",
              containt: ["Pulldown maq", "Copa triceps mc"],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Remo polea baja iso al final 10 sg",
                "Fondos en banco",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Remo mc unilateral",
                "Push dowm polea",
                "Pull over polea alta",
              ],
            },
          ],
        },
        {
          day: 2,
          body: "GLUTEOS",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "4X20 — DESCANSO 1 MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: ["Patada gluteo mc ", "Hip thrust barra olimpica"],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Sentadilla barra hexagonal ",
                "Extension cadera cuadrupedia tobillera lastrada ",
                "flexion cadera piso tobillera lastrada",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Tijera alterna hacia atras  pie sobre step mc (30rep)",
                "Sentadilla sumo 2 step altos mc",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Extension cadera polea",
                "Leg curl polea acostado",
                "Sentadilla española o sissy banda poder verde + iso al final",
              ],
            },
          ],
        },
        {
          day: 3,
          body: "ABDOMEN & BICEPS",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "ABDOMEN 3x30 & BICEPS 3x15 — DESCANSO 2 MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: [
                "Elevacion rodillas agarre jaula",
                "Crunch abdomen apoyo pies",
                "Curl biceps romana",
              ],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Curl biceps concentrado mc sentado",
                "Abdomen TRX plancha dinamica",
                "Mountain climbers TRX",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Carpados ",
                "Plancha iso avanzando lados",
                "Curl biceps martillo mc + iso al final 10 sg",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Ranitas colchoneta agarre pies polea baja",
                "Rueda abdominal",
                "Curl  biceps polea unilateral",
              ],
            },
          ],
        },
        {
          day: 4,
          body: "CIRCUITO FUNCIONAL",
          warmUp: {
            time: "10 minutos",
            exercises: [
              {
                name: "Remo al aire",
                configKeys: ["duración"],
                configValues: ["10 minutos"],
              },
            ],
          },
          duration: "4X1MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: [
                "Cuerda de batida",
                "Pasar la cuerda de batida en skipping ida y vuelta",
                "Sentadilla + press militar mc",
              ],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Sentadilla isometrica 2 bosu",
                "Abdomen rueda",
                "Vuelos laterales mc sobre bosu",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Saltos laterales step",
                "Ascensos al bosu con skipping",
                "Vuelos frontales discos",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Ascensos al cajon con sentadilla",
                "Jumpick jack",
                "Press arnold mc sentado ",
              ],
            },
          ],
        },
        {
          day: 5,
          body: "PIERNA",
          warmUp: {
            time: "8 minutos",
            exercises: [
              {
                name: "Elíptica",
                configKeys: ["FC", "Nivel", "Inclinación"],
                configValues: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                configKeys: ["FC", "Velocidad", "Inclinación"],
                configValues: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "4X20 — DESCANSO 2MIN",
          plans: [
            {
              name: "CIRCUITO #1",
              containt: ["Prensa ", "Sentadilla con press militar mc"],
            },
            {
              name: "CIRCUITO #2",
              containt: [
                "Leg extension maq + iso al final",
                "Pantorrilla bipedo (30rep)",
              ],
            },
            {
              name: "CIRCUITO #3",
              containt: [
                "Sentadilla smith",
                "Ascensos al cajon bajo unilateral en smith",
              ],
            },
            {
              name: "CIRCUITO #4",
              containt: [
                "Aduccion maq o balon",
                "Sentadilla iso apoyo balon mc (1min)",
              ],
            },
            {
              name: "CIRCUITO #5",
              containt: ["Sentadilla barra hexagonal", "Tijera bulgara mc"],
            },
          ],
        },
      ],
    },
  ],
};

//
export const DataContext = createContext<UserType>({} as UserType);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const userContext = user;
  return (
    <DataContext.Provider value={userContext}>{children}</DataContext.Provider>
  );
};
