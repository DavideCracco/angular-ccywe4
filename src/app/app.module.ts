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
import { MercuryService } from './mercury.service';
import { OptionsTank } from './options.tank';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpClientModule 
                ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  ControllerComponent, 
                  ListaComponent, 
                  ElementComponent, 
                  DisplayElementComponent, 
                  OptionsTank 
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ BusService, 
                  MercuryService
                ]
})
export class AppModule { }
