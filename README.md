# myGym

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## About

myGym is a web application developed to provide gym routines based on a given JSON format. It helps users manage their workout plans by providing detailed routines for each day of the week.

Developed as part of a personal project to help gym enthusiasts keep track of their workouts and progress.

## Features

1. Display gym routines based on a provided JSON format.
2. Interactive and dynamic user interface.
3. Day-wise workout routines with detailed warm-up and exercise plans.
4. Easy navigation through different days and routines.
5. Real-time updates using React hooks.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/camilo6castell/myGym.git
   ```
2. Navigate to the project directory:
   ```bash
   cd myGym
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

After starting the development server, you can access the application at `http://localhost:3000` in your web browser. The application will display the gym routines for each day of the week.

## JSON Format

The application uses the following JSON format to display the routines:

```json
{
  "number": 1,
  "objective": "Aumentar masa muscular",
  "days": [
    {
      "day": 1,
      "body": "ABDOMEN - LUMBARES",
      "warmUp": {
        "time": "8 minutos",
        "exercises": [
          {
            "name": "Elíptica",
            "configKeys": ["FC", "Nivel", "Inclinación"],
            "configValues": ["109/136", "4/8", "4/10"]
          },
          {
            "name": "Caminadora",
            "configKeys": ["FC", "Velocidad", "Inclinación"],
            "configValues": ["109/136", "4.0", "2.0"]
          }
        ]
      },
      "duration": "3X30 — DESCANSO 2 MIN",
      "plans": [
        {
          "name": "CIRCUITO #1",
          "containt": [
            "Plancha alta TRX rodillas al pecho",
            "Mountain climbers TRX",
            "Plancha alta abduccion cadera TRX"
          ]
        },
        {
          "name": "CIRCUITO #2",
          "containt": [
            "Abdomen apoyo pies minitram",
            "Plancha isometrica",
            "Ranitas piso con fitball entre los pies"
          ]
        },
        {
          "name": "CIRCUITO #3",
          "containt": [
            "Orador dinamico fitball",
            "Abdomen fitball pasar de manos a pies",
            "Cargar fitball a 90° pierna rotacion tronco tocar talones"
          ]
        },
        {
          "name": "CIRCUITO #4",
          "containt": [
            "Lumbares banco horizontal supremacy",
            "Abdomen agarre pasa manos elevacion rodillas",
            "Transferencias piso"
          ]
        }
      ]
    },
    {
      "day": 2,
      "body": "GLUTEOS",
      "warmUp": {
        "time": "8 minutos",
        "exercises": [
          {
            "name": "Elíptica",
            "configKeys": ["FC", "Nivel", "Inclinación"],
            "configValues": ["109/136", "4/8", "4/10"]
          },
          {
            "name": "Caminadora",
            "configKeys": ["FC", "Velocidad", "Inclinación"],
            "configValues": ["109/136", "4.0", "2.0"]
          }
        ]
      },
      "duration": "3X20 — DESCANSO 1 MIN",
      "plans": [
        {
          "name": "RUTINA",
          "containt": [
            "Ascensos al cajon con extension cadera en smith",
            "Tijera avanzada mc cada serie aumentar repeticion por pierna",
            "Puente bipodal mc pies sobre cajon + isometrico al final 10sg",
            "Peso muerto barra Z",
            "Patada gluteo con abduccion mc",
            "Sentadilla sumo mc step",
            "Abdomen elevacion piernas alterno (3x30rep)"
          ]
        }
      ]
    },
    {
      "day": 3,
      "body": "ESPALDA - PECHO",
      "warmUp": {
        "time": "8 minutos",
        "exercises": [
          {
            "name": "Elíptica",
            "configKeys": ["FC", "Nivel", "Inclinación"],
            "configValues": ["109/136", "4/8", "4/10"]
          },
          {
            "name": "Caminadora",
            "configKeys": ["FC", "Velocidad", "Inclinación"],
            "configValues": ["109/136", "4.0", "2.0"]
          }
        ]
      },
      "duration": "3x15 — DESCANSO 1 MIN",
      "plans": [
        {
          "name": "RUTINA",
          "containt": [
            "Dominadas cerradas banda de poder",
            "Halon en 2 poleas posicion de rodillas",
            "Remo 2 mc en posicion ventral banco inclinado",
            "Remo agarre prono barra z",
            "Push up",
            "Crossover de polea baja",
            "Pull over banco plano mc",
            "Abdomen agarre pasamanos elevacion rodillas y oblicuos (3x20c/u)"
          ]
        }
      ]
    },
    {
      "day": 4,
      "body": "CIRCUITO FUNCIONAL",
      "warmUp": {
        "time": "10 minutos",
        "exercises": [
          {
            "name": "Remo al aire",
            "configKeys": ["duración"],
            "configValues": ["10 minutos"]
          }
        ]
      },
      "duration": "4X1MIN",
      "plans": [
        {
          "name": "CIRCUITO #1",
          "containt": [
            "Cuerda de batida",
            "Pasar la cuerda de batida en skipping ida y vuelta",
            "Plancha dinamica lateral"
          ]
        },
        {
          "name": "CIRCUITO #2",
          "containt": [
            "Saltos al cajon pliometrico",
            "Sentadilla isometrica 2 bosu",
            "Abdomen velitas"
          ]
        },
        {
          "name": "CIRCUITO #3",
          "containt": [
            "Ascensos al bosu con skipping",
            "Burpess",
            "Abdomen carpados"
          ]
        },
        {
          "name": "CIRCUITO #4",
          "containt": [
            "Saltos laterales step mc",
            "Jumpick jack",
            "Step rodillas a codo mc cruzado"
          ]
        }
      ]
    },
    {
      "day": 5,
      "body": "PIERNA",
      "warmUp": {
        "time": "8 minutos",
        "exercises": [
          {
            "name": "Elíptica",
            "configKeys": ["FC", "Nivel", "Inclinación"],
            "configValues": ["109/136", "4/8", "4/10"]
          },
          {
            "name": "Caminadora",
            "configKeys": ["FC", "Velocidad", "Inclinación"],
            "configValues": ["109/136", "4.0", "2.0"]
          }
        ]
      },
      "duration": "3X20 — DESCANSO 2MIN",
      "plans": [
        {
          "name": "RUTINA",
          "containt": [
            "Prensa 10 abiertas + 10 cerradas",
            "sentadilla smith",
            "leg extension maq maximal isometrico final 10 sg",
            "leg curl prono",
            "pantorrilla mc step",
            "aduccion maq",
            "sentadilla isometrica apoyo pared cargar disco",
            "ascensos al cajon unilateral tobillera lastrada"
          ]
        }
      ]
    },
    {
      "day": 6,
      "body": "BRAZOS",
      "warmUp": {
        "time": "8 minutos",
        "exercises": [
          {
            "name": "Elíptica",
            "configKeys": ["FC", "Nivel", "Inclinación"],
            "configValues": ["109/136", "4/8", "4/10"]
          },
          {
            "name": "Caminadora",
            "configKeys": ["FC", "Velocidad", "Inclinación"],
            "configValues": ["109/136", "4.0", "2.0"]
          }
        ]
      },
      "duration": "3X15 — DESCANSO 1 MIN",
      "plans": [
        {
          "name": "RUTINA",
          "containt": [
            "Vuelos lateral polea",
            "Vuelos frontal disco",
            "Press militar mc banco sentado",
            "Curl biceps romana",
            "Curl biceps polea unilateral",
            "Copa triceps polea baja",
            "Patada triceps polea",
            "Fondos banco",
            "Push up agarre bosu inverso"
          ]
        }
      ]
    }
  ]
}
```

### Contact

[GitHub](https://github.com/camilo6castell?tab=repositories)

[LinkedIn](https://www.linkedin.com/in/camilocastell/)
