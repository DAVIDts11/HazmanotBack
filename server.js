const express = require("express");
const app = express();
const mongoose =require("mongoose");

mongoose.connect("");


app.listen(3000,()=>console.log('Server Started !!! Running on port 3000 '))
