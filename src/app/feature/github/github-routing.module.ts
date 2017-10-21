
import { GithubComponent } from '../github/github.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'



@NgModule({
 
  imports: [
    RouterModule.forChild([
      {path: 'github', component: GithubComponent },
      
    ])
  ],
  exports: [RouterModule]
})
export class GithubRoutingModule { }

