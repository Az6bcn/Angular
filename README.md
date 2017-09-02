# AngularFundamental :

In this branch tutorial of Interpolation{{}}, Angular Directive (*ngFor) to iterate , Services and how to inject it to make it a dependecy for a component.

## INTERPOLATION{{}}:
-To bind view to a field (attribute) in our component class.
-To call a method to get some value and show in the browser

{{ field/attribute }} , {{ call a method to get some value }} ==> {{ title }}, {{ getTitle() }}


## DIRECTIVE: 
-To manipulate the DOM
## Angular Directives => *ngFor , *ngIf etc


## SERVICE:
-To retrieve data form Server, Web Services, Web API etc through HTTP
-The Service class must consists the Logic for getting the Data through HTTP

*To use the Service created in our Component we need to inject it into it's constructor as a dependecy  (Dependency Injection) and also Resgister it (our Services => depenciies) as provides[ ] in our module (app.modules.ts) so that it will be availaible to all the declared Components in our module (app.module.ts --> declarations [])


## DEPENDENCY INJECTION:=> IS INJECTING OR PROVIDDING THE DEPENDENCIES OF A CLASS INTO IT'S CONSTRUCTOR.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
