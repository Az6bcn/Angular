import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class OrderService {

  
  constructor(private http: Http) {
  }

  getOrders() { 
// Set Authorization header for the http request, the value of this header should be Bearer with a valis JSON web Token
    let headers = new Headers();
    // get token from local storage
    let token = localStorage.getItem('token');

    headers.append('Authorization' , 'Bearer' + token);


// create request Options Object
    let options = new RequestOptions({headers : headers})



    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }

}
