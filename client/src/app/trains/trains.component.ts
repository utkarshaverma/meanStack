import { Component, OnInit } from '@angular/core';
import {TrainServiceService} from '../train-service.service'
import {Trains} from '../train_schema';
//add service as a provider
@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css'],
  providers:[TrainServiceService]
})
export class TrainsComponent implements OnInit {
  //creating variable of type service class
  trains:TrainServiceService[]; //array of all trains
  train: TrainServiceService; //single train
  name:String;
  destination:String;
  origin:String;
  departureTime:String;
  arrivalTime:String;
  numOfSeats:Number;
  price:Number;
//trainServ is an object of service class
  constructor(private trainServ : TrainServiceService) { }  //service injected in the component

//retrieve data logic inside ngOnInit
  ngOnInit(){
    this.trainServ.getTrains()
    .subscribe(trains => this.trains = trains);
  }

}
