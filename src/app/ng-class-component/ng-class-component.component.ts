import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-component',
  templateUrl: './ng-class-component.component.html',
  styleUrls: ['./ng-class-component.component.css']
})
export class NgClassComponentComponent implements OnInit {
isSelected: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

onClick() {
  this.isSelected = !this.isSelected;
}
}
