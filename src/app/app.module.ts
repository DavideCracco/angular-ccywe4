import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ControllerComponent } from './controller/controller.component';
import { ListaComponent } from './lista/lista.component';
import { BusService } from './bus.service';
import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ControllerComponent, ListaComponent, ElementComponent, DisplayElementComponent],
  bootstrap:    [ AppComponent ],
  providers:    [BusService]
})
export class AppModule { }
