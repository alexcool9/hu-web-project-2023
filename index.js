require("dotenv").config();
const express = require('express');
var chalk = require('chalk');
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const usersRouter = require('./routes/users.routes.js');
const cardsRouter = require('./routes/cards.routes.js');
var cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Health check
app.get("/", (req, res)=>{
    console.log(chalk.blue('Hello world!'));
    res.send("Hello world!!!!!");
});

app.use("/cards", cardsRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 8181;

app.listen(port, ()=>{
    console.log(chalk.blue("Example app listening on port", port));
});

mongoose
  .connect(process.env.DB || 'mongodb://127.0.0.1:27017/test_alex')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  });


  


