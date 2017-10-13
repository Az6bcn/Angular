import { AppError } from './app-error';

//Derives from the AppError bcos its a apecific application error
export class BadRequestError extends AppError{

}