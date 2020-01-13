import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ListaComponent } from './lista/lista.component';
import { BusService } from './bus.service';
import { ElementComponent } from './element/element.component';
import { DisplayElementComponent } from './display-element/display-element.component';
import { PopupComponent } from './lista/popup/popup.component';

@NgModule({
  imports:          [ BrowserModule, 
                      FormsModule,
                      HttpClientModule,
                      MatDialogModule,
                      BrowserAnimationsModule
                    ],
  declarations:     [ AppComponent, 
                      ControllerComponent, 
                      ListaComponent, 
                      ElementComponent, 
                      DisplayElementComponent, 
                      PopupComponent
                    ],
  bootstrap:        [ AppComponent 
                    ],
  entryComponents:  [ PopupComponent
                    ],
  providers:        [ BusService
                    ]
})
export class AppModule { }
