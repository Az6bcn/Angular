import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-twitter-like',
  templateUrl: './bootstrap-twitter-like.component.html',
  styleUrls: ['./bootstrap-twitter-like.component.css']
})
export class BootstrapTwitterLikeComponent implements OnInit {


@Input() like: Boolean;
@Input() countLikes: number;

  constructor() { }

  ngOnInit() {
  }

getClick() {
// First time yu click gonna be true
this.like = !this.like;
if (this.like) {
this.countLikes = this.countLikes + 1;
} else {
  this.countLikes = this.countLikes - 1;
}
}
}
