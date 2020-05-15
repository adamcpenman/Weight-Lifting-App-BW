const router = require('express').Router()

const ExerciseInfoM = require('./exerciseInfo-model')
const restricted  = require('../middlewear/restricted')


router.get('/all/info', restricted, (req, res) =>{
    ExerciseInfoM.find()
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => res.send(err))
}, [])

router.get('/:id/info/', restricted, (req, res) => {
    const id = req.params.id;

    ExerciseInfoM.findByEId(id)
        .then(exercise => {
            if(exercise) {
                res.status(200).json(exercise)
            } else {
                res.status(404).json({
                    error: "This particular ID can not be found"
                })
            }
        })
})

router.get('/info/:id', restricted, (req, res) => {
    const id = req.params.id;

    ExerciseInfoM.findById(id)
        .then(exercise => {
            if(exercise) {
                res.status(200).json(exercise)
            } else {
                res.status(404).json({
                    error: "This particular ID can not be found"
                })
            }
        })
})


router.post('/:id/info', (req, res) => {
    const data = req.body;
    console.log(data)
    const { id } = req.params;
    console.log(req.params)

    ExerciseInfoM.findByEId(id)
        .then(exercise => {
            if (exercise) {
                ExerciseInfoM.add(data, id)
                .then(addE => {
                    res.status(201).json(addE)
                })
            } else {
                res.status(404).json({ message: "Could not find exercise"})
            }
        })
        .catch (err => {
            res.status(500).json({ message: "Could not create new exercise"})
        })
})

router.put('/:id/info/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  ExerciseInfoM.findById(id)
  .then(exercise => {
    if (exercise) {
      ExerciseInfoM.update(changes, id)
      .then(updatedExercise => {
        res.json(updatedExercise);
      });
    } else {
      res.status(404).json({ message: 'Could not find exercise with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update exericse' });
  });
});

router.delete('/info/:id', (req, res) => {
  const { id } = req.params;

  ExerciseInfoM.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find exercise with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete exercise' });
  });
});

module.exports = router