import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { EmailValidatorDirectiveDirective } from './validators/email-validator-directive.directive';
import { MatchingPasswordsValidatorDirectiveDirective } from './validators/matching-passwords-validator-directive.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    EmailValidatorDirectiveDirective,
    MatchingPasswordsValidatorDirectiveDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    EmailValidatorDirectiveDirective,
    MatchingPasswordsValidatorDirectiveDirective,
  ]
})
export class SharedModule { }
