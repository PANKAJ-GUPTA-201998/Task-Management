const Todo = require('../models/task');
exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.redirect('/'); // Redirect to the homepage after deletion
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };