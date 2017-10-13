import { DatashareService } from './../services/datashare.service';
import { Http } from '@angular/http';
import { User } from './../Model/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  userList: Array<User>;
  isLoading$ = new BehaviorSubject(true);


  constructor(private http: Http,
    private serviceToShareData: DatashareService) { }

  ngOnInit() {
    
        this.serviceToShareData.getDataToShare();
        
        this.serviceToShareData.userListShare
            .subscribe( res => {
              this.userList = res;
              console.log("formuserscomponent:",res);
              this.isLoading$.next(false);
            });
            
  }


  
}
