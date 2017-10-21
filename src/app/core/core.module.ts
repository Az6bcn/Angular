import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [NavbarComponent],
  providers: [],
/*exports the NavBar. 
 exports the components, directives, pipes, services, CommonModule etc that belongs to this module that we want to make visible and usable in other modules.
 */
  exports: [NavbarComponent]
})
export class CoreModule { }




/* 
The CoreModule is where we include application wide components and services.
 '''We import this module into AppModule and nowhere else'''. Components included 
 statically on all your views, such as app navigation, are ideal candidates 
 for inclusion in the CoreModule.
Likewise, services that will be utilized by the entire app, such as a
 UserService storing user profiles and handling authentication, belong in the CoreModule.
*/







