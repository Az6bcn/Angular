import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  // Mark 'isFavourite' as an INPUT property so we can use it in property binding expression.
  /*Now this field is exposed to the outside and we can bind it to any field of the
Component class where we are goin to use it as <app-favourite [isFavourite] = 'attributeInComponentClass '></app-favourite [isFavourite] */
  @Input() isFavourite: Boolean;

  /* @Output --> To notify/pass raised event from our customComponent(favourite) to our HOST component (app.component)
****This  field we are decorating with the Output should be same as the name of the  event we want to pass the raised event to in our
HOST component (app.component) */
  @Output() change = new EventEmitter(); // initialise to an instance of the EventEmitter class
  constructor() { }

  ngOnInit() {
  }

  getFavourite() {
  // console.log(this.isFavourite);
  this.isFavourite = !this.isFavourite;

  // Notify/Raise an Event with the EventEmitter (to the field/attribute with @Output)
  // this.change.emit();

  // Notify/Raise/pass a data/object in an Event with the EventEmitter (to the field/attribute with @Output)
  // this.change.emit(this.isFavourite);

  // Object
  this.change.emit({newValue: this.isFavourite});
}
}
