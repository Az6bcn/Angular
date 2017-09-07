import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //
    post = {
    title: 'Title',
    isFavourite: false
  };


  tweet = {
    body: 'This is somebody',
    likes: 50,
    isliked: false
  };

// The Method we call in the event will recieve the data passed/raised/notified as a parameter
  onFavouriteChanged( isFavourite: boolean) {
    console.log('Favourite Changed value', isFavourite);
  }

  onTweetLoveClicked( countLikes: number) {
    console.log('number of count is ', countLikes);
  }
}
