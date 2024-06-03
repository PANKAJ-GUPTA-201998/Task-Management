const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/TodoApp');
      console.log('MongoDB connected');
    } catch (err) {
      console.log('Failed to connect to MongoDB', err);
    }
  };
module.exports=connectDB;
