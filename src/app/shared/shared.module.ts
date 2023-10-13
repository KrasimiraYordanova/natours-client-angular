import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { EmailValidatorDirectiveDirective } from './validators/email-validator-directive.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    EmailValidatorDirectiveDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    EmailValidatorDirectiveDirective
  ]
})
export class SharedModule { }
