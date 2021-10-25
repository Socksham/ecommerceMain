const express = require('express'); // express imports
const cors = require('cors'); // cors import
const mongoose = require('mongoose'); // mongoose import; this is how we interface with MongoDB
require('dotenv').config({path: './config.env'}); // Pulls config vars from outside file
const uri = process.env.ATLAS_URI; // The URI of the MongoDB pulled from the config file

const app = express(); // Creates express server

// uses cors and defines app as a JSON server
app.use(cors());
app.use(express.json());

// Defines app so that we can visit localhost:5000 and see the result of the get request
app.use(function (rew, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

// Connects to the MongoDB using Mongoose, printing a connection once it's fully opened.
mongoose.connect(uri, { useNewUrlParser: true }); // useNewUrlParser tells uses the new parser to parse the connection URL
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Sends a test GET request to return "Test"
app.get('/', (req, res) => {
<<<<<<< HEAD
  return res.send("Test")
=======
   return res.send("Test")
>>>>>>> frontend
})

const itemsRouter = require('./routes/items');
const reviewsRouter = require('./routes/reviews');
const usersRouter = require('./routes/users');

app.use('/items', itemsRouter);
app.use('/reviews', reviewsRouter);
app.use('/users', usersRouter);

// Starts listening on port 5000 for new requests
app.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${process.env.PORT || 5000}!`));
