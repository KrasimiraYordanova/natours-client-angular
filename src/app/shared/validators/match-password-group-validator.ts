import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchingPasswordsGroupValidator(control1: string, control2: string): ValidatorFn {
    return(control) => {
        const group = control as FormGroup;
        const cntrl1 = group.get(control1);
        const cntrl2 = group.get(control2);

        return cntrl1?.value === cntrl2?.value ? null : { mathingPasswordsError: true }
    }
}