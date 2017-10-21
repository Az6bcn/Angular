
import { PostsComponent } from '../posts/posts.component';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'



@NgModule({
 
  imports: [
    RouterModule.forChild([
      {path: 'posts', component: PostsComponent}
    ])
  ],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

