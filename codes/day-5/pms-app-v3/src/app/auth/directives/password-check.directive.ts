import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { passwordStrength } from "../validators/passwordstrength";

@Directive({
    selector: '[passwordcheck]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordCheckDirective,
            multi: true
        }
    ]
})
export class PasswordCheckDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {

        if (control && control.value && control.value != '')
            return passwordStrength(control)
        else
            return null
    }
    registerOnValidatorChange?(fn: () => void): void {

    }

}