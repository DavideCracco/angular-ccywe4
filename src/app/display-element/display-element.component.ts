import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css'],
  providers: [ BusService ]
})
export class DisplayElementComponent implements OnInit {
  @Input() lista = [];
  @Input() selection;
  selected: ElementComponent;
  mod: ElementComponent;
  voidEl: ElementComponent;
  editable = false;
  private url = "https://elements-b73d.restdb.io/media";
  file;

  constructor(private busService: BusService) {   
    this.mod = new ElementComponent();
    this.selected = new ElementComponent();    
    this.voidEl = new ElementComponent();
  }

  ngOnInit() {
    if(this.lista == null ){
      this.selected = this.voidEl;
    }else{
      this.selected = this.lista[this.selection.selection];
    }
  }

  ngOnChanges(changes){
    if(this.lista == null || this.lista == undefined || this.lista.length === 0){ 
      this.selected = this.voidEl;
    }else{
      if(this.selection.selection != undefined && this.selection.selection <= this.lista.length + 1){
        this.selected = this.lista[this.selection.selection];
      }else{
        this.selected = this.lista[0];
      }
    }
  }

  saveMod(){
    this.selected.description = this.mod.description;
    this.selected.elType = this.mod.elType;
    this.editable = !this.editable;
    this.busService.updateThings( this.selected )
      .subscribe(things => {});
  }

  imageUpload(image){
    var response;
    this.file = image.target.files[0];
    var imageForm = new FormData();
    imageForm.append("imgUrl", this.file, this.file.name);    
    this.busService.updateImage(imageForm)
      .subscribe(things => {
        if(things.msg == "OK"){
          this.selected.imgUrl[0] = things.ids[0];
        }
      });
  }

}