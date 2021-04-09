import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OfficialComponent } from './official/official.component';
import { TsClassDirective } from './ts-class.directive';
import { TsStyleDirective } from './ts-style.directive';
import { TsIfDirective } from './ts-if.directive';
import { PipeComponent } from  './pipe/pipe.component';
import { DatePipe } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

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
    TsClassDirective,
    TsStyleDirective,
    TsIfDirective,
    PipeComponent,
    ChildComponent,
    ParentComponent
  ],
  bootstrap:    [ OfficialComponent ],
  providers: [DatePipe]
})
export class AppModule {}
