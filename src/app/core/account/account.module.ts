import { HttpModule } from '@angular/http';
import { AuthServiceService } from './services/auth-service.service';
import { AccountCoreRoutingModule } from './account-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccountCoreRoutingModule,
    ReactiveFormsModule,
    HttpModule
    
  ],
  declarations: [
                 RegisterFormComponent,
                 LoginFormComponent,
                 RegisterFormComponent],
  providers: [AuthServiceService]
})
export class AccountCoreModule { }