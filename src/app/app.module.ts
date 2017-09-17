import { FormsModule } from '@angular/forms';
import { PostServiceUsingGenericService } from './service/post-service/post-serviceUsingGenericService';
import { ReusableGenericDateService } from './service/reusableGenericDataService.service';
import { AppErrorHandler } from './Common/app-error-handler';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    // Import HTTPMODULE
    HttpModule,
    FormsModule
  ],
  providers: [
    ReusableGenericDateService,
    PostServiceUsingGenericService,
  /*Register Global Generic error handler like this: Tells Angular that weherever 
  internally we are using 'ErrorHandler' instead use 'AppErrorHandler' */
  { provide:  ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
