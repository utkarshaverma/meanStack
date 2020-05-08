const mongoose = require('mongoose');

const trainSchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    origin:{
        type:String,
        required:true
    },
    departureTime:{
        type:String,
        required:true
    },
    arrivalTime:{
        type:String,
        required:true
    },
    numOfSeats:{
        type: Number,
        required:true
    },
    price:{
        type: Number,
        required:true
    }
});

const Trains = module.exports = mongoose.model('Trains',trainSchema);