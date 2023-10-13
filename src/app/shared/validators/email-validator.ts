import { ValidatorFn } from "@angular/forms";

export function emailValidator(domain: string[]): ValidatorFn {
    const domainString = domain.join('|');
    const regEx = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`);
    return(control) => {
        return (control.value === '' || regEx.test(control.value)) ? null : { emailValidator: true };
    }
}