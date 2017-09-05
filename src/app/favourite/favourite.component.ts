import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

isSelected: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
getFavourite() {
  console.log(this.isSelected + 'antes');
  this.isSelected = !this.isSelected;
  console.log(this.isSelected);
}


}
