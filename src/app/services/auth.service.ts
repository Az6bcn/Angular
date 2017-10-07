import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/map';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
        .map(response =>{
        let result = response.json();
        // if result is truthy: an object and also has a property called token 
        if(result && result.token){
          // store the token in our local storage
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
        });
  }

  logout() { 
    // Logout === Remove the token from the local Storage
    localStorage.removeItem('token');
  }

  isLoggedIn() { // function to use to manipulate showing/hidding of Links
    return tokenNotExpired('token'); // function provided by angular2-jwt to check if expired (user logged out)/not (logged in)
  }
 

  get currentUser() {

    // Get the token from local storage
    let token  = localStorage.getItem('token');

    // If no token return null
    if (!token) return null;
    console.log(new JwtHelper().decodeToken(token));
    // else DECODE it to access the PAYLOAD data (where we have the admin property to determine if the user is an admin o not)
    return new JwtHelper().decodeToken(token);

    
  }
}
