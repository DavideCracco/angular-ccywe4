import { Component, Input, Output, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ElementComponent } from '../element/element.component';
import { PopupComponent } from './popup/popup.component';
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
  confirm = { "state":"false", "id":"undefined"};
  select;

  constructor(private busService: BusService,
              private dialog: MatDialog) {
   }

  ngOnInit() {
  }

  ngOnChanges(changes){
    /*console.log("INFO - Lista OnChanges")
    this.busService.getThings()
      .subscribe(things => {
    });*/
  }

  onTxtClick(element){
    this.select = element;
    this.selectionEvent.emit({
      selection: element
    });
  }

  onBtnClick(element, index){
    if(element.elType === "A" || element.elType === ""){
      this.onTxtClick(index - 1);
      this.busService.deleteThings(element)
        .subscribe(things => {});
    }
    else if(element.elType === "B"){
      this.confirm = { "state":"true", "id":element._id};
    }

    this.openPopup();

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

  openPopup(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;    
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = { title : "Test!" };

    let dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe( data => {
        }
      );

  }

}