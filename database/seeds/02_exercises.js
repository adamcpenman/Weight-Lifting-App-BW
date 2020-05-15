exports.seed = async (knex) => {
    // await knex('exercises').truncate()

    await knex('exercises').insert([
       { exercise: "Push ups", date: "01-01-20", userId: 1},
       { exercise: "Squats", date: "01-01-20", userId: 1 },

       { exercise: "Squats", date: "01-01-20", userId: 2 },
       { exercise: "Deadlift", date: "01-01-20", userId: 2},

       { exercise: "Bench Press", date: "01-01-20", userId: 3 },
       { exercise: "Pull Ups", date: "01-02-20", userId: 3 },
       { exercise: "Push ups", date: "01-03-20", userId: 3},
       { exercise: "Squats", date: "01-04-20", userId: 3 },

       { exercise: "Bicep Curl", date: "01-01-20", userId: 4},
       { exercise: "Military Press", date: "01-04-20", userId: 4 },
       { exercise: "Reverse Curl", date: "01-08-20", userId: 4 },
       { exercise: "Push ups", date: "01-08-20", userId: 4},
       { exercise: "Squats", date: "01-10-20", userId: 4},
    ])
}