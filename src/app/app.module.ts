import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { NgClassComponentComponent } from './ng-class-component/ng-class-component.component';
import { NgStyleComponentComponent } from './ng-style-component/ng-style-component.component';
import { CustomInputFormatDirective } from './custom-input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponentComponent,
    NgForComponentComponent,
    NgClassComponentComponent,
    NgStyleComponentComponent,
    CustomInputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
