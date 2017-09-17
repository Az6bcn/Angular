import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


// NESTED FORMGROUP: a form with multiple FormGroups.
  form = new FormGroup({ //Group1
    
    account: new FormGroup ({ //Group2
  //Input Field(control)        FormControl   ---> each input field in our Form needs a FormControl Object ()
    username: new FormControl('', ),
    password: new FormControl('', )
  })   
  });

  // getter : To get access to 'form' Object control (username)
  get username() {
    console.log(this.form.value);
    return this.form.get('account.username');
  }
}
