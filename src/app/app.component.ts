import { Component, OnInit, OnChanges, Input} from '@angular/core';

import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';
import { BusService } from './bus.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ BusService]
})

export class AppComponent implements OnInit {
  lista;
  selection = 0;
  data = {
    "sorting"     : "A-Z",
    "search"      : "",
    "listaBackup" : this.lista
  };

  constructor(private busService: BusService){}

  ngOnInit(){
    this.getService();
  }

  ngOnChanges(changes){
    this.getService();
  }

  getService(): void{
    this.busService.getThings()
      .subscribe(things => {
        this.lista = things;
        this.data.listaBackup = things;
        this.setSearch(this.data);
        this.setSorting(this.data);
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

  setSorting(sorting){
    console.log("INFO - Sorting")
    this.data.sorting = sorting.sorting;
    if(this.data.sorting == "A-Z")
      this.lista.sort((a, b) => a.name.localeCompare(b.name));
    else
      this.lista.sort((b, a) => a.name.localeCompare(b.name));
  }

  setSearch(search){
    console.log("INFO - Searching");
    this.data.search = search.search;
    if(this.data.search != ""){
      var nuovo = this.data.listaBackup.filter( (a) => { 
        return a.name.toLowerCase().includes( this.data.search.toLowerCase() );
      } );
      if(nuovo[0] != null)
        this.lista = nuovo;
      else
        this.lista = [];
    }else
      this.lista = this.data.listaBackup;
  }

}
