const router = require("express").Router();

const {
    addWorkout,
    getWorkouts,
    addExercise
} = require("../controllers/workoutController");

router.route("/api/workouts").get(getWorkouts).post(addWorkout);

router.route("/api/workouts/range").get(getWorkouts);

router.route("/api/workouts/:id").put(addExercise);

module.exports = router;