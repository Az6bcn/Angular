# ReactiveForms Validations
 
 <!-- Check for Error on our Custom  Validator Error   : This can throw exceptions of 'null' if the control doesn't have any error, while we tryinmg to access it's error.-->
<div *ngIf="username.errors.shouldBeUnique"> Username already taken</div>


 <!-- Asking if the contol 'username' has errors, if it does we show the message if it doesn't shows nothing -->
<div *ngIf="username.hasError('shouldBeUnique')"> Username already taken</div>  



Angular Form State & input State for validation:

https://www.w3schools.com/angular/angular_validation.asp
