//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var ObjectId = require('mongodb').ObjectID;

var app = express();

//port number
const port = 3000;

//listen to port
app.listen(port,()=>{
    console.log("server started at port number: "+ port);
});

//testing server
app.get('/',(req,res)=>{
    res.send("Server testing successful");
});

//cors middleware
app.use(cors());

//body-parser middleware
app.use(bodyparser.json());

// different file for routing
const route = require('./routes/route');

//routing api
app.use('/api',route);

//using static - html files
app.use(express.static(path.join(__dirname,'public'))); //dirname - current directory
//signifies that the static files(html and css) for express are in the path to public from the current directory

//connecting to mongo db
mongoose.connect('mongodb://localhost:27017/mmtDB');
//checking connection
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb");
});
//in case of error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log("error in connection to mongodb : "+err);
    }
});