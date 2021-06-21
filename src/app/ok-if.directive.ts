import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[okIf]'
})
export class OkIfDirective {
 
  constructor(
    private _viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

   @Input() set okIf(val: boolean){
     this.updateView<boolean>(val);
   }

   updateView<T>(value: T): void{
     if(value){
       this._viewContainer.createEmbeddedView(this.template);
     }else{
       this._viewContainer.clear();
     }
   }
}