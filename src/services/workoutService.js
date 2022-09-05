// In src/services/workoutService.js
// --- Services lo usamos para comunicarnos o traernos info de la base de datos --
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout.js");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  //Hacemos el llamado a la base de datos
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  //probando
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, change) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, change);
  return updatedWorkout;
};

/* const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
}; */
const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
