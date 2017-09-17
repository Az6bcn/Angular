
import { AbstractControl, ValidationErrors } from '@angular/forms';
//wwww.angular.io --> search ValidatorsFn
/* Custom Validator class must have this interface function signation:

interface ValidatorFn { 
  (c: AbstractControl): ValidationErrors|null
}

OUR CUSTOM VALIDATOR SHOULD RETURN OBJECT OF 'ValidationErrors' OR NULL:

type ValidationErrors = {
  [key: string]: any
};
*/


//Custom Validator that UserName can't contain Space
export class UsernameValidators {
    // static method to implement Custom Validator
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null { // control hace referencia al valor del campo que queremos validar 

        //Logic
        // if username contains '' (space) we should return validation errors
        if ((control.value as string).indexOf(' ') >= 0)       // (control.value as string) --> converts control to string
            //return ValidationErrors Object      {cannotContainSpace: true};  cannotContainSpace== name of error
            return { cannotContainSpace: true };

        return null
    }

                        /******** Asynchronous Validations to simulate calling server to validate user name is unique *********/
    //wwww.angular.io --> search AsynchronousFn

    /* Custom Validator class must have this interface function signation:
    interface AsyncValidatorFn { 
        (c: AbstractControl): Promise<ValidationErrors|null>|Observable<ValidationErrors|null>
      }

      OUR CUSTOM VALIDATOR SHOULD RETURN OBJECT OF pROMISES/OBSERVABLES OF 'ValidationErrors' OR NULL:

type ValidationErrors = {
  [key: string]: any
};
      */

    //Asynchronous Validations to simulate server calling for Asynchronous Operation ( calling server to validate user name is unique)
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise ((resolve,reject) => {
            
        setTimeout(() => {
            console.log('ok')

            if (control.value === 'azeez')
                //return ValidationErrors Object
                resolve ({ shouldBeUnique: true });

            else 
                resolve (null);
        }, 2000);
        });
    }
}
