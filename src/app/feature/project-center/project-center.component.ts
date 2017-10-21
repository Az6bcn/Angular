import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-center',
  templateUrl: './project-center.component.html',
  styleUrls: ['./project-center.component.css']
})
export class ProjectCenterComponent implements OnInit {
  public title: string = "ProjectCaenter";
  constructor() { }

  ngOnInit() {
  }

}
