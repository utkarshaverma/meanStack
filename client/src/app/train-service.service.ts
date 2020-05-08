import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { _throw as throwError } from 'rxjs/observable/throw';
import {Trains} from './train_schema';
import { map } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class TrainServiceService {
//will be writing data retrieving logic over here
  constructor(private http:HttpClient) {  }

  //retrive train details
  getTrains(){
    return this.http.get('http://127.0.0.1:3000/api/viewTrains')
    .pipe(map((response: any) => response.json()),catchError(err => throwError(err)) );
  }

  //adding train details
  addTrains(newTrain){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    //headers.append('Content-Type','application/json');
    return this.http.post('http://127.0.0.1:3000/api/addTrains',newTrain,{headers:headers})
    .pipe(map((response: any) => response.json()),catchError(err => throwError(err)) );
  }

  //delete a train details
  deleteTrains(id){
    return this.http.delete('http://127.0.0.1:3000/api/deleteTrains/:'+id)
    .pipe(map((response: any) => response.json()));
  }
}
