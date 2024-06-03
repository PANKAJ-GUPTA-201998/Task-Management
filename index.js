const express = require('express');
const app = express();
const port =8000;
const router = express.Router();
const connectDB = require('./config/db'); // Adjust the path as necessary
// Connect to MongoDB
connectDB();
// Middleware to parse URL-encoded bodies (form submissions)
// data restructure req.body
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON request bodies

app.use(express.json());
// Set EJS as the template engine
app.set('view engine', 'ejs');


app.use('/',require('./routes'))


app.listen(port);
