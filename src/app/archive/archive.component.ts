import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
year: string;
month: string;

  // get the required parameters in the route
  constructor(private _route: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    // Get the parameters

  this._route.paramMap
  .subscribe( params => {
    this.year = params.get('year');
    this.month = params.get('month');

    console.log("year" +this.year ,"month" + this.month);
  })
  }


  getNavigation() {
    this.route.navigate([''])
  }
}
