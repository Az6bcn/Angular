import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NewUserFormComponent } from './../new-user-form/new-user-form.component';


/*
CanActivate: Interface that a class can implement to be a guard deciding if a route can be deactivated.

*/


@Injectable()
export class DirtyTrackingDeactivateGuardGuard implements CanDeactivate<NewUserFormComponent> {
  
  canDeactivate(
    component: NewUserFormComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    /*Logic to control our Route, returns a Boolean result */
      if(component.canActivateMyForm())
      return true && window.confirm("You have unsaved changes");
  }
}

/*
ActivatedRouteSnapshot:
Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.  


RouterStateSnapshot:
Represents the state of the router at a moment in time.
*/