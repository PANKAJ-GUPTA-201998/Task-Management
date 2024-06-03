const todo = require('../models/task');
module.exports.add = async function(req,res){
    try{
        await todo.create(
            {
                taskDescription : req.body.task
            }
        );
        
        return res.redirect('back');
    }
    catch (err){
        console.log('Error in creating Task:', err);
    }

};
