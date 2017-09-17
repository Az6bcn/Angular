
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NestedFormGroupComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    // For using the FormGroup and FormControl
    FormsModule,
    // The formGroup and formControlName Directives are defined in ReactiveFormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
