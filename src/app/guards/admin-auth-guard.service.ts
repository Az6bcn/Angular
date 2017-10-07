import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { } // Router to navigate the user, AuthService to check if user is logged in

  canActivate() {
    
    let user = this.authService.currentUser.admin
    // check if the user is an admin user or not  
    if (user && user.admin) return true;     // that means the user can access the admin route

    // else show them a permission denied page
    this.router.navigate(['/no-access']);
    return false;
  }
}
