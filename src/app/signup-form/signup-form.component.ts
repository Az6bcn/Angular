import { UsernameValidators } from './username-customValidator';
import { Component } from '@angular/core';
// Import FormGroup and Form Controll
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  //****** CREATING CONTROLS *****/
  // Create new instance of the FormGroup Object which takes an Object of our Input field (key) and the FormContrl(value)
  // we create one/more validators when creating 'form' contorl OBJECT
  form = new FormGroup({
//Input Field(control)         FormControl   ---> each input field in our Form needs a FormControl Object ()
        username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
      // custom validator
      UsernameValidators.cannotContainSpace],
      //Custom Asynchronous Validator e.g calling server to validate user name is unique
        UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)   //Multiple Validators in Array[]
  });

  // getter : To get access to 'form' Object control (username)
  get username() {
    //SHOW MY FORM OBJECT:
    console.log("single:")
              console.log(this.form.value);
    //get access to our key (username) of the form Object through the form Object get()
    return this.form.get('username');
  }


  login() {
  console.log("Inssssiiiiiiiiidddddddeeeeee");
      // Set error at the Form level for incorrect credentials
      this.form.setErrors({
        invalidLogin: true
      });
    }

  }

  // login() {
  //   // Call service to check if userName & passwors is valid :  pass the Json object for the control
  //   let isValid = authService.login(this.form.value)

  //   if(!isValid) {
  //     // Set error at the Form level
  //     this.form.setErrors({
  //       invalidLogin: true
  //     })
  //   }

  // }


