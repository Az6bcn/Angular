import { ActivatedRoute } from '@angular/router';
import { User } from './../Model/user';
import { DatashareService } from './../services/datashare.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  private userListPassed: Array<User>;
  private userId: number;
  constructor(private readonly fb: FormBuilder,
    private readonly readDataFromService: DatashareService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    // get the id for edit:
    this.userId = this.router.snapshot.params['id'];

    if (this.userId) {
      this.readDataFromService.userListShare
        .subscribe(res => {
          this.userListPassed = res;
          console.log(this.userListPassed);
          if (this.userListPassed) {
            let userToEdit = this.userListPassed.filter(user => user.id == this.userId);
            console.log("User Object To Edit", userToEdit);
          }

        });
    }
  }


  formObject: FormGroup = this.fb.group({
    User: this.fb.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required]
    }),
    Addresses: this.fb.array([
      this.createAddressFormGroup(),]) //createAddressForm: creates the first formGroup element of the array
  });

  // function to create the Form that will be adding/removing to/from the formArray
  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      Street: ['', Validators.required],
      Suite: ['', Validators.required],
      City: ['', Validators.required],
      ZipCode: ['', Validators.required]
    })
  }

  // Adding FormGroup to the FormArray Dynamically
  addFormGroupToFormArray() {
    // get the Address control object from 'formObject' and cast it as formArray, then push to it as a normal array 
    (this.formObject.get('Addresses') as FormArray).push(this.createAddressFormGroup());
  }

  removeAddress(index: number) {
    const contractsArray = <FormArray>this.formObject.controls['Addresses'];
    contractsArray.removeAt(index);
  }


  Save() {
    // Prints Object of FormGroup n FormArray
    // console.log(this.formObject.controls.User);
    // console.log(this.formObject.controls['User']);
    // console.log(this.formObject.controls.Addresses);
    // console.log(this.formObject.controls['Addresses']);
    // console.log(this.formObject.get('User'))
    // console.log(this.formObject.get('Addresses'))

    //Print the Object of the Name control in the User FormGroup of the FormOBJECT FormGroup.
    // console.log(this.formObject.controls['User'].get('Name'))

    // prints the whole FormObject on Submit
    // console.log(this.formObject);

    // Prints all the inputs in the form as an Object:
    console.log("formValues: ", this.formObject.value);
  }


  checkFormValidity() {
    // console.log(this.formObject.invalid);
    return this.formObject.invalid;
  }

  /** Can't use it in the HTML as it doesn¡t work----> use only for simple control ( formgroup with jst one control as in the github examples)*/
  get AddressControl() {
    // Prints Object of FormGroup n FormArray
    return this.formObject.get('Addresses');
  }


  get email() {

    //Gets the Object of the Email control in the User FormGroup of the FormOBJECT FormGroup.
    return this.formObject.controls['User'].get('Email');
  }


  get phone() {

    //Gets the Object of the Email control in the User FormGroup of the FormOBJECT FormGroup.
    return this.formObject.controls['User'].get('Phone');
  }


  canActivateMyForm(): Boolean {
    console.log("IsFormDirty: ", this.formObject.invalid)
    return this.formObject.invalid;
  }


}
