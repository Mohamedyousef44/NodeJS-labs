
const express = require('express')
const router = express.Router();
const stdsController = require('../Controllers/studentsController')
const coursesController = require('../Controllers/studentsController')


router.get('/' , stdsController.getAllStds)

router.get('/:id' , stdsController.getOneById )

router.put('/:id' , stdsController.updateOne )

router.post('/create' , stdsController.createOne)

router.delete('/:id' , stdsController.deleteOne)

// router.delete('/api/student/:id' , ()=>{

// })

// router.put('/api/student/:id' , ()=>{

// })

module.exports = router ;