export class AppError{
    
        /**
         * Represents an Application Error... Error specific to our app.
         */
        constructor(public originalError?: any) {}
            // originalError: it our original error from server.

    }