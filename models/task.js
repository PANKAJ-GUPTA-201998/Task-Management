const mongoose = require('mongoose');
//make a scehma
const todoAdd = new mongoose.Schema({
    taskDescription :{
        type: String,
        required : true
    }
})
//make a model of schema todoAdd of name addTask
const addTask = mongoose.model('addTask',todoAdd)
//import it for further use to add task and things
module.exports = addTask;

