const express = require("express");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const app = express(); // crear la app de express
const PORT = process.env.PORT || 3000;

//esto es para poder recibir y ver el json que me mandan por body
app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  // la hacemos escuhar en el puerto que le pasamos por variabkes de entorno
  console.log(`🚀 Api is listening on port ${PORT}`);
});
