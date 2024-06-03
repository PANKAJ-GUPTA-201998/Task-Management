const todo = require('../models/task');
module.exports.add = async function(req,res){
    console.log(req.body)
    try{
        await todo.create(
            {
                taskDescription : req.body.taskDescription
            }
        );
        
        return res.redirect('/');
    }
    catch (err){
        console.log('Error in creating Task:', err);
    }

};
