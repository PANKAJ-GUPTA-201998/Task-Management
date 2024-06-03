const dataB = require('../models/task');

module.exports.getTasks = async function(req,res){
    try{
        const tasks = await dataB.find() // Fetch all tasks from the database
        res.render('index',{tasks}); // Pass the tasks to the template

    }
    catch(err){
        console.error(error); // Fetch all tasks from the database
        res.status(500).send('Server Error'); // Pass the tasks to the template
    }
}

