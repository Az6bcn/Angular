import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


/* GETTING THE PARAMETERS OF A ROUTE IN .ts:
- Inject 'ActivatedRoute' into the constructor (private route: ActivatedRoute)
- this.route.paramsMap, gives us all the paramsin this route (it's an Observable, Subscribe to it) 
*/


export class ProfileComponent implements OnInit {

  // Inject Routerservice, Activated Route
  constructor( private router: Router,   private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.paramMap
    .subscribe(params => {

      console.log(params.get('username'));
    })
  }

// use the injected router service to create the navigation programmatically
  getNavigation() {
     this.router.navigate(['/followers'], {
       queryParams: { page: 1, order: 'newest'}
     });
  }

  

  // this.router.navigate(['/path', required parameters as configured in the router], { queryParams { } });
}
