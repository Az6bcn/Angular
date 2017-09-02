import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  // Declare all created Components in declarations[ ]
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  // Register all Services and dependecies injected in Components here in provider[ ] so that it becomes visible to all Components
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
