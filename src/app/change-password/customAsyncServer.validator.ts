import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordCustomValidators {
    //Asynchronous Validations to simulate server calling for Asynchronous Operation ( calling server to validate user name is unique)
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // control == the value of our form control 
                if (control.value !== 'azeez')
                    //return ValidationErrors Object
                    resolve({ invalidOldPassword: true });

                else
                    resolve(null);
            }, 2000);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        console.log("DENTTTTTTTTTTTRRRRRROOOOOOOO");
        console.log("userpass1 : " + control.get('newPass1'));
        console.log("userpass1 value: " + control.value);
        let newPass = control.get('newPass1');
        let confmPass = control.get('newPass2');
        if (newPass.value != confmPass.value)
            return { passwordsShouldMatch: true };

        return null
    }
}