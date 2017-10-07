import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean; 
  
    constructor(
      private router: Router, 
      private authService: AuthService) { }
  
    signIn(credentials) {
      this.authService.login(credentials)
        .subscribe(result => { 
          if (result)
          //Navigate user to Homepage
            this.router.navigate(['/']);
          else  
            this.invalidLogin = true; 
        });
    }

  ngOnInit() {
  }

}
