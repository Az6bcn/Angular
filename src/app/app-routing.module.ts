



import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'
import { ProjectCenterModule } from './feature/project-center/project-center.module';
import { PostsModule } from './feature/posts/posts.module';
import { GithubModule } from './feature/github/github.module';
import { AccountCoreModule } from './core/account/account.module';



@NgModule({
 
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      { path: 'lazygithub', loadChildren: 'app/feature/github/github.module#GithubModule'},
      { path: 'lazypost', loadChildren: 'app/feature/posts/posts.module#PostsModule'},
      { path: 'lazyprojectcenter', loadChildren: 'app/feature/project-center/project-center.module#ProjectCenterModule'},
      {path:  'accountauth', loadChildren: './core/account/account.module#AccountCoreModule'},
      {path:  'accountregister', loadChildren: './core/account/account.module#AccountCoreModule'},
      {path: '**', component:  HomeComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

