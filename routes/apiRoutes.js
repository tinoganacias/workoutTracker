

const Workout = require("../models/workout.js")
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"
                }
            }
        }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"

                }
            }
        }
    ]).limit(10).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    }) 
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises:req.body
        }
    },
    {
        new:true,
        runValidators:true
    }).then(data => {
        res.json(data)

    }).catch(err => {
        res.json(err)
    })
})

module.exports = router