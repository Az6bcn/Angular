import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Define Root
    RouterModule.forRoot([
      {path: '', component: HomeComponent},    
      {path: 'archive/:year/:month', component: ArchiveComponent}, // Required parameters
      {path: '**', component: NotFoundComponent}  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
