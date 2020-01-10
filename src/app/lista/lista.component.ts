import { Component, Input, Output, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ BusService ]
})
export class ListaComponent implements OnInit {
  //elementEvent = new EventEmitter<{element: ElementComponent}>();
  @Output() selectionEvent = new EventEmitter<{selection: any}>();
  @Input() lista = [];
  @Input() search;
  private url = "https://elements-b73d.restdb.io/media";
  confirm = { "state":"false", "id":"undefined"};
  select;

  constructor(private busService: BusService) {
   }

  ngOnInit() {
  }

  ngOnChanges(changes){
    this.busService.getThings()
      .subscribe(things => {
    });
  }

  onTxtClick(element){
    console.log("Selection => " , element);
    this.select = element;
    this.selectionEvent.emit({
      selection: element
    });
  }

  onBtnClick(element, index){
    console.log("deleteElement -> " , element);
    if(element.elType === "A" || element.elType === ""){
      this.onTxtClick(index - 1);
      this.busService.deleteThings(element)
        .subscribe(things => {});
    }
    else if(element.elType === "B"){
      this.confirm = { "state":"true", "id":element._id};
    }
  }

  onConfirmClk(button, element){
    if(button === "yes"){
      this.busService.deleteThings(element)
        .subscribe(things => {});
      this.confirm = { "state":"false", "id":element._id};
    }else{
      this.confirm = { "state":"false", "id":element._id};
    }
  }

}