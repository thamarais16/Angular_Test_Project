import { Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[tsIf]'
})
export class TsIfDirective {
  _tsIf: boolean;
  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) { }

  @Input()
  set tsIf(val: boolean){
    this._tsIf = val;
    this._updateView();
  }

  _updateView(){
    if(this._tsIf){
      this._viewContainer.createEmbeddedView(this._templateRef);
    }else{
      this._viewContainer.clear();
    }
  }


}