const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type:Date,
        default:Date.now
    },
    exercises:[{
        type: {
            type:String,
            trim:true,
            required:"Enter type"
        },
        name: {
            type:String,
            trim:true,
            required:"Enter name"
        },
        duration: {
            type: Number,
            required:"Enter time"
        },
        weight: {
            type:Number,
        },
        reps: {
            type:Number,
        },
        sets: {
            type:Number
        },
        distnace: {
            type:Number
        }
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;