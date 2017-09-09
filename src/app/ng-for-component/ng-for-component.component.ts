import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {

courses: Array<Object> = [
  {id: 1, Name: 'courese1'},
  {id: 2, Name: 'courese2'},
  {id: 3, Name: 'courese3'}
];

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    console.log('addddiiinng');
this.courses.push({id: 4, Name: 'courese4'});
  }
// get the course we want to remove
onRemove(course) {
  console.log('remoooovviiinnnggg');
// get the index of the passed course among the courses in the coursesArray
let index = this.courses.indexOf(course);
// delete the course at this index
this.courses.splice(index , 1);

}
}
