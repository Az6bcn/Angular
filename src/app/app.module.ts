

import { AppRoutingModule } from './app-routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import FeatureModules
import { ProjectCenterModule } from './feature/project-center/project-center.module';
import { PostsModule } from './feature/posts/posts.module';
import { GithubModule } from './feature/github/github.module';
// import coreModule
import { CoreModule } from './core/core.module';
import { AccountCoreModule } from './core/account/account.module';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    /* import coreModule: now we can use it's exported components, directive, pipe  etc in this module.
    e.g, this allows the <app-navbar> selector to be placed on the AppComponent template. 
    */
    CoreModule, 
    //GithubModule,
    //PostsModule,
    //ProjectCenterModule,
    //AccountCoreModule,
    AppRoutingModule // routing module file: where we configure routes for the root app module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://medium.com/@ct7/angular2-module-architecture-and-example-seed-project-35b7410264f5