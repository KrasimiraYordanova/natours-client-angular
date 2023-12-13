import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchingPasswordsValidator(controlA: string, constrolB: string):  ValidatorFn {
    return (control) => {
        const groupControl = control as FormGroup;
        const passwordControl = groupControl.get(controlA);
        const rePasswordControl = groupControl.get(constrolB);
        return passwordControl?.value === rePasswordControl?.value ? null : { matchingPasswordsValidator: true };
    }
}