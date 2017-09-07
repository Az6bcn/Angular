import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { BootstrapTwitterLikeComponent } from './bootstrap-twitter-like/bootstrap-twitter-like.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    BootstrapTwitterLikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
