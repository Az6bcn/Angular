import { NotFoundError } from '../Common/not-found-error';
import { BadRequestError } from '../Common/bad-request-error';
import { AppError } from '../Common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import the catch Operator on the Observables
import 'rxjs/add/operator/catch';
//import static Throw() on Observable class
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


// Register the Service in the PROVIDERS: [ ] of app.module.ts

@Injectable()
export class ReusableGenericDateService {

  // Inject the http Service , want the classes that derived from this class to supply the url
  constructor(private url: string, private http: Http) { }


  getAll() {
    // return the Observable 
    return this.http.get(this.url)
    //Use MAP OPERATOR to Transform the Response to Javascript Array. --> this will be the result the consumer of this service will subscribe to.
    .map(response => response.json())
     //Catch the error Object which is an Instance of the Response class
     ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }



  create(resource) {
    //Returns an Observable result to the consumer of this service
    return this.http.post(this.url, resource)
    .map(response => response.json())
      //Catch the error Object which is an Instance of the Response class
    ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }


  update(idResourceToUpdate, resourceObjectToUpdate) {
    //Returns an Observable result to the consumer of this service
    return this.http.put(this.url + '/' + idResourceToUpdate, resourceObjectToUpdate)
    .map(response => response.json())
    ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }

  delete(idResourceToDelete) {
    //Returns an Observable result to the consumer of this service
    return this.http.delete(this.url + '/' + idResourceToDelete)
      .map(response => response.json())
      //Catch the error Object which is an Instance of the Response class
      ._catch(this.handleError); //Not calling the Method, just passing a Refrence

  }


  //Method to handle Server Response Error
  private handleError(error: Response) {

    /* Handling Expected Error (Imagine we sending invalid data to the Server response will be Bad Request, status code 400)
            check the status of the response  */
    if (error.status === 404)
      //return Observable that includes an error and pass an application specfic domain type error (BadRequestError)
      return Observable.throw(new BadRequestError(error.json()));



    /* Handling Expected Error (The post might already been deleted and the Server response will be Not found, status code 404):
    check the status of the response )*/
    if (error.status === 404) {
      //return Observable that includes an error and pass an application specfic  domain type error (NotFoundError
      return Observable.throw(new NotFoundError())
    }


    return Observable.throw(new AppError(error));
  }


}


