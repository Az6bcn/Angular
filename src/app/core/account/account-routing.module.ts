import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from '../account/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


@NgModule({
 
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginFormComponent },
      {path: 'register', component: RegisterFormComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AccountCoreRoutingModule { }

