import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OfficialComponent } from "./official/official.component";
import { TsClassDirective } from "./ts-class.directive";
import { TsStyleDirective } from "./ts-style.directive";
import { TsIfDirective } from "./ts-if.directive";
import { PipeComponent } from "./pipe/pipe.component";
import {
  DatePipe,
  CurrencyPipe,
  SlicePipe,
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  PercentPipe
} from "@angular/common";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component"; 
import { TempConverterPipe } from "./temp-converter.pipe";
import { DirectivesComponent } from "./directives/directives.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { ScIfDirective } from "./sc-if.directive";
import { Customer } from "./customer"
import { DateFormatPipe } from "./date-format.pipe";
import { ChildCommuComponent } from "./child-commu/child-commu.component";
import { ParentCommuComponent } from "./parent-commu/parent-commu.component";
import { ServiceComponent } from './service/service.component'
import { ProductService } from "./product-service";
import { loggerService } from "./log";
import { ProSer } from "./pro-ser";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { userDetail } from './classes/token';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OfficialComponent,
    TsClassDirective,
    TsStyleDirective,
    TsIfDirective,
    PipeComponent,
    ChildComponent,
    ParentComponent,
    TempConverterPipe,
    DirectivesComponent,
    InterpolationComponent,
    ScIfDirective,
    DateFormatPipe,
    ChildCommuComponent,
    ParentCommuComponent,
    ServiceComponent,
    ReactiveFormComponent
  ],
  bootstrap: [ReactiveFormComponent],
  providers: [
    DatePipe,
    CurrencyPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    PercentPipe,
    Customer,
   // ProductService,
    //loggerService,
  ]
})
export class AppModule {}
