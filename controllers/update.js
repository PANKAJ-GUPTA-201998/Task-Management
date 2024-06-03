const Todo = require('../models/task');

// Function to update a task
exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { taskDescription } = req.body;

      //find the particular task
      await Todo.findByIdAndUpdate(id, { taskDescription });
      res.redirect('/'); // Redirect to the homepage after updating
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
