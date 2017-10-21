import { ProjectCenterComponent } from '../project-center/project-center.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'



@NgModule({
 
  imports: [
    RouterModule.forChild([
      {path: 'projectcenter', component: ProjectCenterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ProjectCenterRoutingModule { }

