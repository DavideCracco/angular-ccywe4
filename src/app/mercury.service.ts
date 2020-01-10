import { Injectable } from '@angular/core';

import { Observable, of as ObservableOf  } from 'rxjs';

@Injectable()
export class MercuryService {
  data;

  constructor() {
    this.data = {
      "sorting" : "A-Z"
    }
   }

  setData(data) {
    if(data.sorting != undefined)
      this.data.sorting = data.sorting;
    console.log("Mercury Set - " , this.data);
  }

  getData(): Observable<any[]>{
    console.log("Mercury Get - " , this.data );
    return ObservableOf(this.data);
  }

}