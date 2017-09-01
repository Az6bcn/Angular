import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
courses;

// Inject the service into the constructor as a Dependency (Depency Injection)
/******and REGISTER ALL DEPENDECIES IN PROVIDERS [ ]  OF OUR MODULE , app.module.ts**** */
  constructor( _service: CoursesService) {


    this.courses = _service.getCourses();
  }

  ngOnInit() {
  }

}
