import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {
courses: any;


/* Inject the authorService as a Dependency and Register it in provider [ ] in module so it becomes 
available to all the components --> app.module.ts */
  constructor( _service: CoursesService) {


    this.courses = _service.getCourses();
  }

  ngOnInit() {
  }

}
