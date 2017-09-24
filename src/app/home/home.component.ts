import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  archiveArray = [{year: 2017, month: 1}, 
    {year: 2018, month: 7}, 
    {year: 2019, month: 3}, 
    {year: 2020, month: 12}];


  constructor() { 
    

  }

  ngOnInit() {
    
  }

}
