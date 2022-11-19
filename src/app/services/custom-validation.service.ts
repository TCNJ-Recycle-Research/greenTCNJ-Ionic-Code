import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

// This file was made to check that passwords are equivalent on the registration page, it is a custom validator as there is 
// no default password match validator
@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  //loks at 2 string values within a form group and compares them
  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: UntypedFormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
  
}
