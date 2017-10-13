import { NewUserFormComponent } from './../new-user-form/new-user-form.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


/*
CanActivate: Interface that a class can implement to be a guard deciding if a route can be deactivated.

*/

@Injectable()
export class DirtyTrackingGuardGuard implements CanActivate {


  constructor(private formComponent: NewUserFormComponent ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   console.log("Entrando en canActivate");
      /*We implement the Logic to control our Route in the canActivate(), returns a Boolean result 
          which is later used on the Route configuration to allow access o  No */
   
   if (this.formComponent.canActivateMyForm())
      return true && window.confirm("You have unsaved changes");
  }
}
  
 
/*
ActivatedRouteSnapshot:
Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.  


RouterStateSnapshot:
Represents the state of the router at a moment in time.
*/