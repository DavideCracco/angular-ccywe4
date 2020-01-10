import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ElementComponent } from './element/element.component';

const httpOptions = {
  reportProgress: true,
  headers: new HttpHeaders({
  "Content-Type" : "application/json",
  "x-api-key" : "5e15bc32b68f0802dd3e611c"
  })
};

const httpImageOptions = {
  reportProgress: true,
  //observe: "events",
  headers: new HttpHeaders({
  "x-api-key" : "5e15bc32b68f0802dd3e611c"
  })
};

@Injectable()
export class BusService implements OnInit {
  private url = "https://elements-b73d.restdb.io/rest/things";
  private imageUrl = "https://elements-b73d.restdb.io/media";
  lista;


  constructor( private http: HttpClient ) {  }

    ngOnInit(){
      //this.lista = this.getThings();
    }

    public getThings(){
      console.log("INFO - Elements get.");
      return this.http.get(this.url, httpOptions);
    }

    public setThings(element){
      console.log("INFO - Element set.");
      return this.http.post(this.url, element, httpOptions)/*
        .subscribe(things => {
          console.log(things);
        })*/;
    }

    public updateThings(element){
      console.log("INFO - Element updated.");
      var url = this.url.concat("/" + element._id);
      return this.http.patch(url, element, httpOptions);
    }

    public deleteThings(element){
      console.log("INFO - Element deleted.");
      var url = this.url.concat("/" + element._id);
      return this.http.delete(url, httpOptions);
    }

    public updateImage(image){
      console.log("INFO - Image updated");
      let el = new ElementComponent();
      return this.http.post(this.imageUrl, image, httpImageOptions);
    }

}