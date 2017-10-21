import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import the 'SharedModule' so that we can use it's exported components, directives, pipes,
   services etc (CommonModules for ngIf, ngFor) any where in this module */
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
   // CommonModule, ---> ya viene del SharedModule exportado
    SharedModule, //see explanation
    PostsRoutingModule
  ],
  declarations: [PostsComponent], 
  providers: [],
  exports: [PostsComponent]
})
export class PostsModule { }

/*
we imported the SharedModule into our ProjectCenterModule. This allows the <app-table-layout> selector to be placed on any
    Components template.*/