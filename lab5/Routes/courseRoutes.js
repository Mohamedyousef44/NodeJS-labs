
const express = require('express')
const router = express.Router();
const courseController = require('../Controllers/coursesController')

router.get('/' , courseController.getAll)
router.get('/:id' , courseController.getOneById)
router.post('/create' , courseController.createOne)
router.put('/:id' , courseController.updateOneById)
router.delete('/:id' , courseController.deleteOneById)

module.exports = router ;