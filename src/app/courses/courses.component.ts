import { Component, OnInit } from '@angular/core';

/* To use this component as an Element, we refrence it via its selector as <app-courses> </app-courses>
Where ever <app-courses></app-courses> appears this component's template(HTML) is rendered. */
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

// Define Title field ---> we will show it in the browser with interpolation {{}}
  title = 'List of Courses';

  constructor() { }

  ngOnInit() {
  }

  // Method --> we will show it's return value in the browser through interpolation
  getTitle() {

    return 'This is returned from the getTitle() through interpolation';
  }

}
