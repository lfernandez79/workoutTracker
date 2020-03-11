const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "day is required"
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "exercise"
    }]
});