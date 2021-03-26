import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OfficialComponent } from './official/official.component';
import { TsClassDirective } from './ts-class.directive';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule 
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    OfficialComponent,
    TsClassDirective
  ],
  bootstrap:    [ OfficialComponent ]
})
export class AppModule {}
