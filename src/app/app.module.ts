import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
// Guards
import { AdminAuthGuard } from './guards/admin-auth-guard.service';
import { AuthGuard } from './guards/auth-guard';
// Authenticate 
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    NoAccessComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] }, // [AuthGuard]: ensures that only logged in users can access this Route
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [

    OrderService,
    AdminAuthGuard,   // Register Guard as provider 
    AuthGuard,
        AuthService,                 // For implementing Login n Logout

        // For creating a mock back-end. You don't need these in a real app. 
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
