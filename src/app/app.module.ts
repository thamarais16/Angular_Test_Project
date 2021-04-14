import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

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
import { ChildComponent, Customer } from "./child/child.component";
import { TempConverterPipe } from "./temp-converter.pipe";
import { DirectivesComponent } from "./directives/directives.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { ScIfDirective } from "./sc-if.directive";
import { GrandchildComponent } from "./grandchild/grandchild.component";

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
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
    GrandchildComponent
  ],
  bootstrap: [ParentComponent],
  providers: [
    DatePipe,
    CurrencyPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    PercentPipe
  ]
})
export class AppModule {}
