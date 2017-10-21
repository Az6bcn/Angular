import { Router} from '@angular/router';
import { Credentials } from './../../../shared/models/credentials';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

private credentials: Credentials;
private loginSuccesful: boolean;



  constructor(private loginFormGrupo: FormBuilder,
              private readonly authService: AuthServiceService,
              private readonly router: Router ) { }

  ngOnInit() {

    this.loginFormGroupObject;
  }


  loginFormGroupObject = this.loginFormGrupo.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  get userName() {
    return this.loginFormGroupObject.get('username');
  }

  disabledSubmit(){

    return this.loginFormGroupObject.invalid;
  }

private Login(){

      this.credentials = this.loginFormGroupObject.value;
      
      this.authService.signIn(this.credentials)
      .subscribe( response => {
      this.loginSuccesful = response;

      // redirect if successful i.e returns true
      if(this.loginSuccesful){
        this.router.navigate(['/home']);
      }
      
      })
}

}

