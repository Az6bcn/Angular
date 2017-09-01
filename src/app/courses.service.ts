import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

// Get Courses
getCourses() {

       return ['course1', 'course2', 'course3'];
}

  constructor() { }

}
