import { ReusableGenericDateService } from '../reusableGenericDataService.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


/*********  Inherits all the methods declared inour Generic data service (reusableGenericDataService.service)  *************/

@Injectable()
export class PostServiceUsingGenericService extends ReusableGenericDateService{

  
//To create an instance of a Derived class, 1st we create an instance of the Base class.
  constructor( http: Http) { 
    //call constructor of the base class
    super('http://jsonplaceholder.typicode.com/posts', http)
  }


  

}


