const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/api.js")(app);
require("./routes/view.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useUnifiedTopology: true, useNewUrlParser: true });



// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));
// });

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "../exercise.html"));
// });

// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "../stats.html"));
// });


// app.get("/api/workouts", (req, res) => {
//     //return all workouts
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// app.get("/api/workouts/range", (req, res) => {
//     //not exactly sure what this one wants
// }); 

// app.put("/api/workouts/:id", ({ body }, res) => {
//     //add exercise to workout matching id
//     db.Exercise.create(body)
//         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))

// });


// app.post("/api/workouts", ({ body }, res) => {
//     db.excercise.create(body)
//         .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { excercise: _id } }, { new: true }))
//         .then(dbworkout => {
//             res.json(dbworkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});