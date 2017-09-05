import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { SummaryPipe } from './custom-summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';


@NgModule({
  // Declare all created Components in declarations[ ]
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    PipesExampleComponent,
    SummaryPipe,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Register all Services and dependecies injected in Components here in provider[ ] so that it becomes visible to all Components
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
