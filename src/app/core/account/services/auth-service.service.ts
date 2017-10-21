
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/Operator/map';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthServiceService {

  private url = 'http://localhost:60312/api/auth/login'

  constructor(private httpService: Http) { }

  signIn(credentials){

    /**** CORS */
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', '  POST');
    headers.append('Access-Control-Allow-Origin', '*');

    let options = new RequestOptions( {headers: headers});
    
    var  credentialStringified = JSON.stringify(credentials);

      return this.httpService.post(this.url, credentialStringified, options)
      .map(response =>{
        let result = response.json();
        console.log(result);
        // check if response has token property
        if(result.auth_token){
          //store the token in the local storage... will always get it there for petitions
          localStorage.setItem('token', result.auth_token)
          return true;
        }

          return false;
      });

  }
}
