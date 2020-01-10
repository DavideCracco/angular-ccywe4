import { Component, Output,  OnInit , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [  ]
})
export class ControllerComponent implements OnInit {
  @Output() elementEvent = new EventEmitter<{ element: any }>();
  @Output() sortingEvent = new EventEmitter<{ sorting: any }>();
  @Output() searchEvent  = new EventEmitter<{ search : String }>();
  element;
  sorting = "A-Z";
  search: String;

  constructor() { 

   }

  ngOnInit() {
  }

  onClick(): void{
    this.elementEvent.emit({
      element: this.element
    });
    this.element = "";
  }

  sortMode(){
    this.sortingEvent.emit({
      sorting: this.sorting
    })
  }

  searchString(){
    this.searchEvent.emit({
      search: this.search
    })
  }



}