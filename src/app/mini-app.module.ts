import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OfficialComponent } from './official/official.component'

@NgModule({ 
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    OfficialComponent
  ],
  providers: [],
  bootstrap:[OfficialComponent]
})
export class MiniAppModule { }