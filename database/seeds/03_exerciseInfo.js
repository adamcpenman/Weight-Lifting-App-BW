exports.seed = async (knex) => {
    // await knex('exerciseInfo').truncate()

    await knex('exerciseInfo').insert([
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 1 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 2 },

       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 3 },
       { weight: "10lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 4 },

       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 5 },
       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 6 },
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 7 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 8 },

       { weight: "30lbs", reps: 1, sets: 1, region: "arm", completed: false, exerciseId:  9 },
       { weight: "10lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 10 },
       { weight: "30lbs", reps: 1, sets: 1, region: "arms", completed: false, exerciseId: 11 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 12 },
       { weight: "30lbs", reps: 1, sets: 1, region: "legs", completed: false, exerciseId: 13 },
    ])
}