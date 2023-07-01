const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const personRoute = require("./routes/person");


dotenv.config();
const url = "mongodb://127.0.0.1/lab12";
// Connect database 
mongoose.connect((process.env.MONGODB_URL),{ useUnifiedTopology: true }, ()=>{
    console.log("Connected to mongodb");
})


app.use(bodyParser.json({limit:"50mb"})); // giới hạn là 50 mb
app.use(cors());
app.use(morgan("common"));


app.get("/api", (req, res)=>{
    res.status(200).json("Hello");
})

// ROUTES 
app.use('/v1/person/', personRoute);

app.listen(8000, ()=>{
    console.log(" Server is running ...");
})
