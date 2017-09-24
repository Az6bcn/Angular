import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { IFollower } from '../../IFollower';
import { GithubServiceService } from '../github-service.service';
import { Component, OnInit } from '@angular/core';
// Import Observable Operator for combining multiple Observables, to create a new observable to which we would subscribe
import 'rxjs/add/Observable/combineLatest';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  res: IFollower[];

  // Inject this Service, ActivatedRoute(to get the query Parameters)
  constructor(private _service: GithubServiceService, private _route: ActivatedRoute) { }

  ngOnInit() {

    //Combine Observables
    Observable.combineLatest([
      this._route.paramMap,
      this._route.queryParamMap
    ])
      .switchMap (combinedObser => {
        // 1r element : paramMap , 2n: queryParamMap
        //Getting route required parameters as configured inour route in module.ts (paramMap)
        let user = combinedObser[0].get('username');
        // Get the 'Optional Query Parameters'
        let page = combinedObser[1].get('page');

        /**** WE CAN CALL OUR SERVICE TO SEND PETITION WITH PARAMETERS */
        //this._route.get({id: id, page: page})
        return this._service.getFollowers();
      })
          .subscribe(resFromApi => {
            this.res = resFromApi
            //console.log(this.res);

          });

   



  }


}
