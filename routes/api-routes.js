const app = require("express").Router();
const Workout = require("../models/workout.js");

app.get("api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.put("/api/workouts:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercise: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(10)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.delete("api/workouts/:id", (req, res) => {
  Workout.findByIdAndDelete(params.id)
  .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});
