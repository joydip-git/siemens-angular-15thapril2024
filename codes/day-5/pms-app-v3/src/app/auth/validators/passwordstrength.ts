import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordStrength(control: AbstractControl): ValidationErrors | null {

    const input = <string>control.value

    let properLength = false
    if (input.length >= 6 && input.length <= 12)
        properLength = true

    if (!properLength) {
        return {
            length: 'length should be between 6 and 12. current length is ' + input.length
        }
    }

    let isLower = false
    for (const ch of input) {
        if (ch >= 'a' && ch <= 'z') {
            isLower = true
            break
        }
    }

    if (!isLower) {
        return {
            lowercase: 'should have at least one lower case '
        }
    }

    let isUpper = false
    for (const ch of input) {
        if (ch >= 'A' && ch <= 'Z') {
            isUpper = true
            break
        }
    }

    if (!isUpper) {
        return {
            uppercase: 'should have at least one upper case '
        }
    }

    let isDigit = false
    for (const ch of input) {
        if (ch >= '0' && ch <= '9') {
            isDigit = true
            break
        }
    }

    if (!isDigit) {
        return {
            digit: 'should have at least one digit'
        }
    }

    return null
}