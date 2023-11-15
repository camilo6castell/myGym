"use client";

import { createContext } from "react";
export const DataContext = createContext();

const dataGym = {
  name: "Isabel Herrera",
  rutines: [
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
                config: ["FC", "Nivel", "Inclinación"],
                configValue: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                config: ["FC", "Velocidad", "Inclinación"],
                configValue: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X30 — DESCANSO 2 MIN",
          plan: [
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
                config: ["FC", "Nivel", "Inclinación"],
                configValue: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                config: ["FC", "Velocidad", "Inclinación"],
                configValue: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X20 — DESCANSO 1 MIN",
          plan: [
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
                config: ["FC", "Nivel", "Inclinación"],
                configValue: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                config: ["FC", "Velocidad", "Inclinación"],
                configValue: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3x15 — DESCANSO 1 MIN",
          plan: [
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
            time: "8 minutos",
            exercises: [
              {
                name: "Remo al aire",
                config: ["duración"],
                configValue: ["10 minutos"],
              },
            ],
          },
          duration: "4X1MIN",
          plan: [
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
                config: ["FC", "Nivel", "Inclinación"],
                configValue: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                config: ["FC", "Velocidad", "Inclinación"],
                configValue: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X20 — DESCANSO 2MIN",
          plan: [
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
                config: ["FC", "Nivel", "Inclinación"],
                configValue: ["109/136", "4/8", "4/10"],
              },
              {
                name: "Caminadora",
                config: ["FC", "Velocidad", "Inclinación"],
                configValue: ["109/136", "4.0", "2.0"],
              },
            ],
          },
          duration: "3X15 — DESCANSO 1 MIN",
          plan: [
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
  ],
};

export const DataProvider = ({ children }) => (
  <DataContext.Provider value={dataGym}> {children} </DataContext.Provider>
);
