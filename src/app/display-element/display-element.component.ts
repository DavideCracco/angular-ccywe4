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
  editable = false;
  private url = "https://elements-b73d.restdb.io/media";
  file;

  constructor(private busService: BusService) {   
    this.mod = new ElementComponent();
    this.selected = new ElementComponent();
  }

  ngOnInit() {
    this.selected = this.lista[this.selection.selection];
  }

  ngOnChanges(changes){
    //console.log("Display -> " , this.selection.selection);
    //console.log("ListaDisplay -> " , this.lista);
    if(this.lista != undefined){
      if(this.selection.selection != undefined)
        this.selected = this.lista[this.selection.selection];
      else{
        this.selected = this.lista[0];
      }
    }
  }

  saveMod(){
    //console.log("MOD -> " , this.mod);
    this.selected.description = this.mod.description;
    this.selected.elType = this.mod.elType;
    this.editable = !this.editable;
    this.busService.updateThings( this.selected )
      .subscribe(things => {});
  }

  imageUpload(image){
    console.log("IMAGE -> " , image.target.files[0]);
    var response;
    this.file = image.target.files[0];
    var imageForm = new FormData();
    imageForm.append("imgUrl", this.file, this.file.name);    
    this.busService.updateImage(imageForm)
      .subscribe(things => {
        console.log("THINGS -> " , things);
        if(things.msg == "OK"){
          this.selected.imgUrl[0] = things.ids[0];
        }
      });
    //this.selected.imgUrl[0] = response.body.ids[0];


    //console.log("RET -> " , returned);
    //this.selected.imgUrl[0] = returned.body.ids[0];
  }

}