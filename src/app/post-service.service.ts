import { NotFoundError } from './Common/not-found-error';
import { BadRequestError } from './Common/bad-request-error';
import { AppError } from './Common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import the catch Operator on the Observables
import 'rxjs/add/operator/catch';
//import static Throw() on Observable class
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

// Register the Service in the PROVIDERS: [ ] of app.module.ts

@Injectable()
export class PostServiceService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  // Inject the http Service 
  constructor(private http: Http) { }


  getPosts() {
    // return the Observable result to the consumer of this service
    return this.http.get(this.url)
     //Catch the error Object which is an Instance of the Response class
     ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }



  createPost(postToSend) {
    //Returns an Observable result to the consumer of this service
    return this.http.post(this.url, postToSend)
      //Catch the error Object which is an Instance of the Response class
      ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }


  updatePost(idItemToUpdate, objectToUpdate) {
    //Returns an Observable result to the consumer of this service
    return this.http.put(this.url + '/' + idItemToUpdate, objectToUpdate)
      ._catch(this.handleError); //Not calling the Method, just passing a Refrence
  }

  deletePost(idItemToDelete) {
    //Returns an Observable result to the consumer of this service
    return this.http.delete(this.url + '/' + idItemToDelete)
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


