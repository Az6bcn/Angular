import { PasswordCustomValidators } from './customAsyncServer.validator';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formObject;

  //Inject the FomBuilder
  constructor(private fb: FormBuilder) {
    //Create Form Object with fb
    this.formObject = fb.group({
        oldPass: ['', Validators.required, PasswordCustomValidators.validOldPassword],
        newPass1: ['', Validators.required],
        newPass2: ['', Validators.required] 
      },
      //Extra validator for the forGroup
      {
        validator: PasswordCustomValidators.passwordsShouldMatch
      });

  }

  ngOnInit() {
  }




  get old() {
    console.log(this.formObject);
    //Return the oldPass control
    return this.formObject.get('oldPass');
  }
  get new() {
    //Return the oldPass control
    return this.formObject.get('newPass1');
  }
  get confirm() {
    //Return the oldPass control
    return this.formObject.get('newPass2');
  }

 







}
