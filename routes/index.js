const express = require('express');
const router = express.Router();
const Task = require('../controllers/add')
const home = require('../controllers/home')
router.get('/',home.getTasks);
router.post('/add',Task.add);
module.exports = router
