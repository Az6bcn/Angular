import { IFollower } from '../IFollower';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
//import static Throw() on Observable class
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubServiceService {

  private url = 'https://api.github.com/users/mosh-hamedani/followers'

  // Inject http
  constructor(private _http: Http) { }

getFollowers(): Observable<IFollower[]> {

  return this._http.get(this.url)
  .map(Response => <IFollower[]>Response.json()) // transform/convert to JS Array
  ._catch(this.handleError);
  
}



private handleError(error: Response) {
  
      /* Handling Expected Error (Imagine we sending invalid data to the Server response will be Bad Request, status code 400)
              check the status of the response  */
      if (error.status === 404)
        //return Observable that includes an error and pass an application specfic domain type error (BadRequestError)
        return Observable.throw(error.json());
  
  
  
      /* Handling Expected Error (The post might already been deleted and the Server response will be Not found, status code 404):
      check the status of the response )*/
      if (error.status === 404) {
        //return Observable that includes an error and pass an application specfic  domain type error (NotFoundError
        return Observable.throw(error.json());
      }
  
  
      return Observable.throw(error.json());
    }
  
}
