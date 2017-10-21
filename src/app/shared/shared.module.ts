import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout/table-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableLayoutComponent],
  providers: [],
  /*exports the components that belongs to this module that we want to
   make visible and usable in other modules.
 */
  exports: [
    CommonModule, // see bottom page explanation
    TableLayoutComponent // see bottom page explanation
]
})
export class SharedModule { }

/*
The SharedModule contains components that will be reused in two or more feature modules.
We will setup the SharedModule for this seed project with one component. A TableLayoutComponent 
is just the kind of component that is likely to be reused in many parts of the application.
*/

/*
By importing and then re-exporting 'CommonModule', we’ll save ourselves from needing to 
import CommonModule into any feature modules that import this SharedModule.
*/

/*
We declare and export TableLayoutComponent. This component contains a template we wish to make available
 to several modules later on.
 */
