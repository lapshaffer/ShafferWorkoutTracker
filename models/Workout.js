// Based on the seeds, it looks like each Workout model needs a field for day and an array for exercises
const { Schema, model } = require('mongoose');

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: 'Please select an exercise type'
                },
                name: {
                    type: String,
                    required: 'Please provide an exercise name'
                },
                duration: {
                    type: Number,
                    required: 'Please provide an exercise duration'
                },
                distance: Number,
                weight: Number,
                reps: Number,
                sets: Number
            }
        ]
    }
);

const Workout = model('workout', workoutSchema);

module.exports = Workout;