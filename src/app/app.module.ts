import { PostsComponent } from './posts/posts.component';
import { GithubServiceService } from './github-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule,
// Define Routes
    RouterModule.forRoot([
      {path: '', component: HomeComponent},    // path , Component to this display at that path
      {path: 'followers/:username', component: ProfileComponent},   //profile/:username ----> username is a parameter
//    {path: 'followers/:username/:id', component: ProfileComponent},  // --> Route with Multiple Parameters
      {path: 'followers', component: FollowersComponent}, 
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent}   // When user navigate to any non vlaid url ** catches any url in the browser
    ])
/* Most specific route on the top*/
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
