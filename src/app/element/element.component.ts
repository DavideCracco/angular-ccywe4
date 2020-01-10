import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})

export class ElementComponent implements OnInit {
  _id;
  name;
  description;
  elType;
  imgUrl;

  constructor() {
    this.name = "none";
    this.description = "not available";
    this.elType = "";
    this.imgUrl = ["5e1743569cf4c938000aee56"];
  }

  ngOnInit() {
  }

  public setElement(name, description, elType, imgUrl): void{
    this.name = name;
    this.description = description;
    this.elType = elType;
    this.imgUrl = imgUrl;
  }

  public getElement(): ElementComponent{
    var el: ElementComponent;
    el._id = this._id;
    el.name = this.name;
    el.description = this.description;
    el.elType = this.elType;
    el.imgUrl = this.imgUrl;
    return el;
  }

}