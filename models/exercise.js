const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema ({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    set: Number,
    distance: Number
});

const Exercise = mongoose.model("exercise", exercisesSchema);
module.exports = Exercise;