const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/completeapplication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("MongoDB conectado!")
}).catch(err => console.log(err));;


app.listen(3333);
module.exports = mongoose;