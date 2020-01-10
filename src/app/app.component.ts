import { Component, OnInit, OnChanges, Input} from '@angular/core';

import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';
import { BusService } from './bus.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ BusService ]
})

export class AppComponent implements OnInit {
  lista;
  selection = 0;

  temp = {
    "name":"Carlo",
    "description":"It's a human.",
    "elType":"B"
  }

  constructor(private busService: BusService){
    /*this.lista.push({"_id":"0", "name":"Banana", "description":"It's a fruit.", "elType":"B", "imgUrl":"https://www.ilprimatonazionale.it/wp-content/uploads/2019/12/Una-banana-sul-muro.-La-nuova-opera-di-Cattelan-vale-120mila-dollari.jpg"});
    this.lista.push( {"_id":"1", "name":"Car", "description":"It's a car.", "elType":"A", "imgUrl":"https://cdnwp.dealerk.com/eed49ed7/uploads/sites/380/2018/09/listino-maserati-mobile.jpg"} );
    this.lista.push( {"_id":"2", "name":"Steve", "description":"He's a Human.", "elType":"C", "imgUrl":"https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190324210629-02-steve-carell-2018.jpg"} );*/
  }

  ngOnInit(){
    this.getService();
  }

  ngOnChanges(changes){
    this.getService();
  }

  getService(): void{
    this.busService.getThings()
      .subscribe(things => {
        things.sort((a, b) => a.name.localeCompare(b.name));
        this.lista = things;
    });
  }

  setLista(element){
    var el = new ElementComponent();
    el.name = element.element;
    if(element.element != null || 
       element.element != undefined){
      this.busService.setThings(el);
    }
    this.getService();
  }

  setSelection(selection){
    this.selection = selection;
    this.getService();
  }

}
