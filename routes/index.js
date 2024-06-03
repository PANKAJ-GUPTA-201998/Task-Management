const express = require('express');
const router = express.Router();
const Task = require('../controllers/add')
const home = require('../controllers/home')
const update =require('../controllers/update')
const done = require('../controllers/delete')

router.get('/',home.getTasks);

router.post('/add',Task.add);

router.post('/update/:id',update.updateTask);

router.post('/delete/:id',done.deleteTask);


module.exports = router
