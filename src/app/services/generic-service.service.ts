import { NotFoundError } from './../Error/not-found-error';
import { AppError } from './../Error/app-error';
import { BadRequestError } from './../Error/bad-request-error';
import { User } from './../Model/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GenericServiceService {

private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getAll(): Observable<User[]> {
    // return the Observable 
    return this.http.get(this.url)
    //Use MAP OPERATOR to Transform the Response to Javascript Array. --> this will be the result the consumer of this service will subscribe to.
    .map(response  => <User[]>response.json())
     //Catch the error Object which is an Instance of the Response class
     ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }


   //Method to handle Server Response Error
   private handleError(error: Response) {
    
        /* Handling Expected Error (Imagine we sending invalid data to the Server response will be Bad Request, status code 400)
                check the status of the response  */
        if (error.status === 404)
          //return Observable that includes an error and throw an error specific to our application domain type error (BadRequestError)
          return Observable.throw(new BadRequestError(error.json()));
    
    
    
        /* Handling Expected Error (The post might already been deleted and the Server response will be Not found, status code 404):
        check the status of the response )*/
        if (error.status === 404) {
          //return Observable that includes an error and throw an error specific to our application  domain type error (NotFoundError)
          return Observable.throw(new NotFoundError())
        }
    
    //return Observable that includes an error and throw an error (unknown) to our application  domain type error (AppError)
        return Observable.throw(new AppError(error));
      }
}
