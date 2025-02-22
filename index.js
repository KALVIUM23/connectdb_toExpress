const express = require('express');
const { resolve } = require('path');
require("dotenv").config();
const mongoose =require("mongoose");

const app = express();
const port = 3010;
app.use(express.json())

//mongoose conection 

mongoose.connect(process.env.mongo_url)
.then(()=>(
  console.log("connected to database")
))
.catch((err)=>(
  console.log("error connecting to database",err)
))

app.use(express.static('static'));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
