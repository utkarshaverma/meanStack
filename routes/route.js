const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trains = require('../models/trains_schema');
var ObjectId = require('mongodb').ObjectID;

//READING
//retrieve information for trains
router.get('/viewTrains',(req,res,next)=>{
    console.log("retrieving the list of trains");
    Trains.find(function(err,traindeets){   //using find function with function callback
        res.send(traindeets);
        //traindeets is variable to store all information for the trains retrieved
    });
});

//retrieve information for buses
router.get('/viewBuses',(req,res,next)=>{
    console.log("retrieving the list of buses");
});

//retrieve information for flights
router.get('/viewFlights',(req,res,next)=>{
    console.log("retrieving the list of flights");
});

//INSERTING
//add new information for trains
router.post('/addTrains',(req,res,next)=>{
    console.log("adding new train entry to the list of trains");

    //create an object of type Trains - newtrain1
   /* let newtrain1 = new Trains({
        name: req.body.name,
        destination:req.body.dest,
        origin:req.body.orig,
        departureTime:req.body.deptTime,
        arrivalTime:req.body.arvTime,
        numberOfSeatsRemaining:req.body.seats,
        price:req.body.price,
    });*/
    let newtrain1 = new Trains({
        name: "rajdhani",
        destination:"mumbai",
        origin:"jaipur",
        departureTime:"newtime1",
        arrivalTime:"newtime2",
        numOfSeats:564,
        price:1900,
    });

    newtrain1.save((err,train)=>{     //train is variable for new entry that is being added to the db
        if(err)
        {
            console.log("error in inserting train entry");
            //res.send("cannot insert this Entry");
            res.json(err);
        }
        else{
            console.log("successful in inserting train entry");
            //res.send("entry inserted");
            res.json(train);
        }
    });
});

//add new information for buses
router.post('/addBuses',(req,res,next)=>{
    console.log("adding new bus entry to the list of buses");
});

//add new information for flights
router.post('/addFlights',(req,res,next)=>{
    console.log("adding new flight entry to the list of flights");
});
/*
//UPDATING
//update information for trains
router.get('/viewTrains',(req,res,next)=>{
    console.log("retrieving the list of trains");
});

//retrieve information for buses
router.get('/viewBuses',(req,res,next)=>{
    console.log("retrieving the list of buses");
});

//retrieve information for flights
router.get('/viewFlights',(req,res,next)=>{
    console.log("retrieving the list of flights");
});

*/


//DELETING
//delete information for trains
router.get('/deleteTrains/:id',(req,res,next)=>{  
    // mongo inplicitly assigns id to every entry in the db
    // we delete an entry based on this id , recieved from client
    console.log("deleting an entry from trains");
    var newid = req.params.id;
    newid = newid.replace(/:/g,''); 
    Buffer.from(newid).toString('hex')
    var id = new ObjectId(newid);
    //console.log(typeof(id));
    //console.log(id);
    Trains.remove({_id:id},function(err,result){
        if(err)
        {
            console.log("error in deleting train entry");
            //res.send("cannot delete this Entry");
            res.json(err);
        }
        else{
            console.log("successful in deleting train entry");
            //res.send("entry deleted");
            res.json(result);
        }
    });    
});

//retrieve information for buses
router.get('/deleteBuses/:id',(req,res,next)=>{
    console.log("deleting an entry from buses");
});

//retrieve information for flights
router.get('/deleteFlights/:id',(req,res,next)=>{ 
    console.log("deleting an entry from flights");
});



module.exports = router;