import { Component, Output,  OnInit , EventEmitter } from '@angular/core';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [ BusService ]
})
export class ControllerComponent implements OnInit {
  @Output() elementEvent = new EventEmitter<{ element: any }>();
  element;

  constructor(public service: BusService) { 

   }

  ngOnInit() {
  }

  onClick(): void{
    this.elementEvent.emit({
      element: this.element
    });
    this.element = "";
  }

}