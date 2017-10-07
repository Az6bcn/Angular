import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate {

  
  constructor(private authService: AuthService,
                private router: Router) { } // Router to navigate the user, AuthService to check if user is logged in

  canActivate() { 
   // Check to see if the user is Loggedin/not, if logged in we return true
   // otherwise we navigate the user to the login page and return false

   if (this.authService.isLoggedIn()) return true;

   this.router.navigate(['/login']);
   return false;
       
  }

}