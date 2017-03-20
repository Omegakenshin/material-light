//todo: eliminar @Input() validateControl, pasando el control padre

import {Component, Input} from "@angular/core";

@Component({
selector: 'ml-error',
template: '<div *ngIf="showError()" style="display: block"><ng-content></ng-content></div>'
})
export class MlValidationError {

  @Input() validateControl: any;
  @Input() validator: string;   // validator name

  showError(): boolean | undefined{
    if (this.validateControl){
      return ( this.validateControl.hasError(this.validator) && this.validateControl.touched );
    }
  }

  ngOnInit() {
    // hack cause: validateControl.errors.minLength != validateControl.errors['minLength'] for example
    this.validator = this.validator.toLowerCase();
  }
}