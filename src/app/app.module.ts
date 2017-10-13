import { DatashareService } from './services/datashare.service';

import { GenericServiceService } from './services/generic-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirtyTrackingGuardGuard } from './Guards/dirty-tracking-guard.guard';
import { DirtyTrackingDeactivateGuardGuard } from './Guards/dirty-tracking-deactivate-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    NewUserFormComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
     // For using the FormGroup and FormControl
     FormsModule,
     // The formGroup and formControlName Directives are defined in ReactiveFormsModule
     ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'users/edit/:id' , component: NewUserFormComponent}, //users/edit/:id ----> id is a parameter
      { path: 'users/new' , component: NewUserFormComponent, canDeactivate: [DirtyTrackingDeactivateGuardGuard]},
      { path: 'users' , component: UsersComponent },
      { path: 'posts' , component: PostsComponent /*, canActivate: [DirtyTrackingGuardGuard] */},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [ 
    GenericServiceService ,
    DirtyTrackingGuardGuard, 
    NewUserFormComponent,
    DirtyTrackingDeactivateGuardGuard,
    DatashareService
 
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
