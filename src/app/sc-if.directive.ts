import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[scIf]'
})
export class ScIfDirective {

   _scIf: boolean;

  constructor(
    private _viewContainer: ViewContainerRef,
    private _template: TemplateRef<any>
  ) { }

  @Input()
  set scIf(value: boolean){
    this._scIf = value;
    this.updateView();
  }

  updateView(){
    if(this._scIf){
      this._viewContainer.createEmbeddedView(this._template);
    }else{
      this._viewContainer.clear();
    }
  }


}
