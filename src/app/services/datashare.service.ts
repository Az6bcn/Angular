import { GenericServiceService } from './generic-service.service';
import { User } from './../Model/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class DatashareService  {
  private userList: Array<User>;

  /*Observable BehaviorSubject to emit the 'ListOfUsers' to all subscribers, it will notify the 
  subscribed components where we need to use this data through this dataService, null by default.*/
  public readonly userListShare = new BehaviorSubject<Array<User>>(null);

  constructor(private userService: GenericServiceService) { }

getDataToShare(){
  this.userService.getAll()
  .subscribe(usersArrayResponse => {
    this.userList = usersArrayResponse;

     /* calls next on the BehaviorSubject to change its current value */
      this.userListShare.next(this.userList);
   });
}
 

  
}
