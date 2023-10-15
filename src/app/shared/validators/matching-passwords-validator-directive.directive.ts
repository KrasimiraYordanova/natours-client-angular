import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { matchingPasswordsGroupValidator } from './match-password-group-validator';

@Directive({
  selector: '[appMatchingPasswordsValidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchingPasswordsValidatorDirectiveDirective,
    multi: true
  }]
})
export class MatchingPasswordsValidatorDirectiveDirective implements OnChanges, Validator {

  @Input() appMatchingPasswordsValidatorDirective: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
      const matchPasswords = changes['appMachingPasswordsValidatorDirective'];
      if(matchPasswords) {
        this.validator = matchingPasswordsGroupValidator(matchPasswords.currentValue[0], matchPasswords.currentValue[1]);
      }
  }

}
