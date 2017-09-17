/*******************************************************************Global GENERIC Error Handler*********************************************/
import { ErrorHandler } from '@angular/core';
//ErrorHandler :  search in angular.io
//To display error to the user and log error to the server

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert('An unexpected error ocurred.');
        //Log error message on the server
        //console.log(error);
    }
}



//Register this new class as a Dependency en app.module.ts