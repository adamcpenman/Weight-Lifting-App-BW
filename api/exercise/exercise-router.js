const router = require('express').Router()

const ExerciseM = require('./exercise-module')
const restricted  = require('../middlewear/restricted')


router.get('/exercise/all', restricted, (req, res) =>{
    ExerciseM.find()
        .then(exercise => {
            res.json(exercise)
        })
        .catch(err => res.send(err))
}, [])

router.get('/:id/exercise/', restricted, (req, res) => {
    const id = req.params.id;

    ExerciseM.findById(id)
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

router.post('/:id/exercise/', (req, res) => {
    const data = req.body;
    console.log(data)
    const { id } = req.params;
    console.log(req.params)

    ExerciseM.findById(id)
        .then(exercise => {
            if (exercise) {
                ExerciseM.add(data, id)
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

router.put('/:id/exercise/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  ExerciseM.findById(id)
  .then(exercise => {
    if (exercise) {
      ExerciseM.update(changes, id)
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

router.delete('/:id/exercise/:id', (req, res) => {
  const { id } = req.params;

  ExerciseM.remove(id)
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