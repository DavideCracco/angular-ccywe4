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
  @Input() data;
  private url = "https://elements-b73d.restdb.io/media";
  private grayscale = {"value": 80, "direction":"up", "string":""};
  confirm = { "state":"false", "id":"undefined"};
  select;

  constructor(private busService: BusService) {
   }

  ngOnInit() {
    this.loadingPulse();
  }

  ngOnChanges(changes){
    /*console.log("INFO - Lista OnChanges")
    this.busService.getThings()
      .subscribe(things => {
    });*/
    console.log("changesList - >" , changes);
  }

  onTxtClick(element){
    console.log("Selection => " , this.data);
    this.select = element;
    this.selectionEvent.emit({
      selection: element
    });
  }

  onBtnClick(element, index){
    //console.log("deleteElement -> " , element);
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

  loadingPulse(){
    setInterval((time) => {

      if(this.grayscale.direction === "up"){
        this.grayscale.value = this.grayscale.value + 10;
      }else{
        this.grayscale.value = this.grayscale.value - 10;        
      }

      if(this.grayscale.value <= 80){
        this.grayscale.direction = "up";
      }else if(this.grayscale.value >= 240){
        this.grayscale.direction = "down";
      }

      this.grayscale.string = "rgb(" + this.grayscale.value +
                             "," + this.grayscale.value +
                             "," + this.grayscale.value + ")"
      //console.log(this.grayscale.string);

    }, 200);
  }

}