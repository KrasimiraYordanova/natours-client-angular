import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmailValidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirectiveDirective,
    multi: true
  }]
})
export class EmailValidatorDirectiveDirective implements OnChanges, Validator{

  @Input() appEmailValidatorDirective: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
      const appEmailChange = changes['appEmailValidatorDirective'];
      if(appEmailChange) {
        this.validator = emailValidator(appEmailChange.currentValue);
      }
  }
}
